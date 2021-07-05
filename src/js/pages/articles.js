import { parseUrl } from './../modules/parseUrl.js'
import { createUrl } from './../modules/createUrl.js';
import { showResult } from './../modules/showResult.js';
import { sendRequest } from './../modules/sendRequest.js';
import { sortAscending, sortDescending } from './../modules/sortArticle.js';
import { page_size } from '../modules/constant.js';

var url = window.location.search

var right_limit = 8
var stop_page = 6
var current_page_url = parseUrl(url).page
var current_page_num = 1

var last_page = document.getElementById('last-page')
var sort_btns = document.querySelectorAll('.sortby')
var page_links



sort_btns.forEach(btn => {
    btn.addEventListener('click', function (event) {
        if (btn.classList.contains('arrowUp')) {
            btn.classList.remove('arrowUp')
            btn.classList.add('arrowDown')
            sendRequest(createUrl(parseUrl(url))).then(function (response) {
                return response.json()
                    .then((data) => {
                        showResult(sortAscending(data.articles, btn.getAttribute('data-soprtby')))
                    })
            })
        } else {
            btn.classList.remove('arrowDown')
            btn.classList.add('arrowUp')
            sendRequest(createUrl(parseUrl(url))).then(function (response) {
                return response.json()
                    .then((data) => {
                        showResult(sortDescending(data.articles, btn.getAttribute('data-soprtby')))
                    })
            })
        }

    })
});

url = url.replace(/_page=[1-9]{1}$|^[1-9]{1}[0-9]{1}$|^100/, '')

var changeHref = () => {
    page_links.forEach(link => {
        // url = url.replace(/_page=[1-9]{1}$|^[1-9]{1}[0-9]{1}$|^100/, '')
        link.removeAttribute('href')
        link.setAttribute('href', url + '_page=' + link.getAttribute('data-page'))
    });
}

var current_page_el

var createPaginationList = (max_page) => {
    var prev

    if (max_page > right_limit) {
        document.querySelector('.pagination__list-item').insertAdjacentHTML('afterEnd', `
        <li class="pagination__list-item" id="pre-last-page">
        <span class="pagination__list-prev">
            ...
        </span>
    </li>
        `)
        prev = document.getElementById('pre-last-page')
    } else {
        prev = document.querySelectorAll('.pagination__list-item')
        prev = prev[prev.length - 2]
    }


    for (let i = 1; max_page < right_limit ? i < max_page : i < right_limit; i++) {
        prev.insertAdjacentHTML('beforebegin', `
    <li class="pagination__list-item">
    <a class="pagination__list-page pagination-page" href="`+ url + '_page=' + i + `" data-page='` + i + `'>
      `+ i + `
    </a>
    </li>
    `)

    page_links = document.querySelectorAll('.pagination-page')

    }

    current_page_el = document.querySelector('.pagination-page[data-page="' + current_page_url + '"]')
    current_page_el.setAttribute('id', 'current-page')

}



sendRequest(createUrl(parseUrl(url))).then(function (response) {
    return response.json()
        .then((data) => {
            deleteArticles(data.articles.length)
            showResult(data.articles)

            let max_page = Math.ceil(data.totalResults / page_size)
            last_page.textContent = max_page
            last_page.setAttribute('data-page', max_page)

            createPaginationList(max_page)
        })
})


var deleteArticles = (length) => {
    for (let i = page_size - 1; i >= length; i--) {
        var articles_block = document.querySelector('.articles__block')
        articles_block.removeChild(document.querySelectorAll('.article')[i])
    }
}


document.getElementById('pagination-next').addEventListener('click', (event) => {
    var max_page = last_page.getAttribute('data-page')

    if (current_page_url < max_page) {
        (current_page_num < stop_page || current_page_url >= max_page - 2) ? moveCurrentPage(++current_page_num) : movePageNumbers(1)
        current_page_url++
    }


    if (current_page_url === max_page - 2) {
        var pre_max_page = document.getElementById('pre-last-page')
        pre_max_page.removeChild(pre_max_page.querySelector('.pagination__list-prev'))
        var pre_max = document.createElement('a')
        pre_max_page.appendChild(pre_max)
        pre_max.classList = 'pagination__list-prev pagination-page'
        pre_max.setAttribute('data-page', max_page - 1)
        pre_max.innerHTML = max_page - 1
        pre_max.setAttribute('href', '#')
        page_links = document.querySelectorAll('.pagination-page')


    }
})


document.getElementById('pagination-prev').addEventListener('click', (event) => {
    var max_page = last_page.getAttribute('data-page')


    if (current_page_url > 1) {
        ((current_page_num <= stop_page || current_page_url >= max_page - 3) && current_page_num > 1) ? moveCurrentPage(--current_page_num) : movePageNumbers(-1)
        current_page_url--
    }

    if (current_page_url <= max_page - 8 && current_page_url > stop_page) { //&& current_page_url > stop_page почему-то было?
        var pre_max_page = document.getElementById('pre-last-page')
        pre_max_page.removeChild(pre_max_page.querySelector('.pagination__list-prev'))
        var pre_max = document.createElement('span')
        pre_max_page.appendChild(pre_max)
        pre_max.classList = 'pagination__list-prev'
        pre_max.innerHTML = '...'

      //  var last_page = document.getElementById('last-page')

    //     last_page.insertAdjacentHTML('beforebegin', `
    //     <li class="pagination__list-item" id="pre-last-page">
    //     <span class="pagination__list-prev">
    //         ...
    //     </span>
    // </li>
    //     `)

    }

})

var moveCurrentPage = (current) => {
    document.getElementById('current-page').removeAttribute('id')
    page_links[--current].setAttribute('id', 'current-page')
    // document.getElementById('current-page').click()
}


var movePageNumbers = (side) => {
    for (let i = 0; i < page_links.length - 1; i++) {
        page_links[i].text = parseInt(page_links[i].text) + side
        page_links[i].dataset.page = parseInt(page_links[i].text)
    }
    changeHref()
}

