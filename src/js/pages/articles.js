import { parseUrl } from './../modules/parseUrl.js'
import { createUrl } from './../modules/createUrl.js';
import { showResult } from './../modules/showResult.js';
import { sortArticle } from './../modules/sortArticle.js';
import { sendRequest } from './../modules/sendRequest.js';



var sort_btns = document.querySelectorAll('.sortby')

sort_btns.forEach(btn => {
    btn.addEventListener('click', function (event) {
        if (btn.classList.contains('arrowUp')) {
            btn.classList.remove('arrowUp')
            btn.classList.add('arrowDown')
        } else {
            btn.classList.remove('arrowDown')
            btn.classList.add('arrowUp')
        }
        //console.log(btn.getAttribute('data-soprtby'))
        // sortArticle(sendRequest(createUrl(parseUrl())),btn.getAttribute('data-soprtby'))
    })
});


var page_links = document.querySelectorAll('.pagination-page')



var changeHref = () => {
    let url = window.location.search
    page_links.forEach(link => {
        const re = /_page=(0-9)/
        url = url.replace(re, '')
        console.log(url)
        link.removeAttribute('href')
        link.setAttribute('href', url + '_page=' + link.getAttribute('data-page'))
    });
}

changeHref()

// const sendRequest = async () => {
//     const a = await 3
//     console.log(a)
//     return a
// }


//sendRequest()



var max_page = 13 //page_size
document.getElementById('last-page').setAttribute('data-page', max_page)



var current_page_el = document.getElementById('current-page')
var current_page_num = current_page_el.getAttribute('data-page')

var stop_page = 6

var current_page_url = 1


var max = document.getElementById('last-page')
max.textContent = max_page

document.getElementById('pagination-next').addEventListener('click', (event) => {
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
    if (current_page_url > 1) {
        ((current_page_num <= stop_page || current_page_url >= max_page - 3) && current_page_num > 1) ? moveCurrentPage(--current_page_num) : movePageNumbers(-1)
        current_page_url--
    }

    if (current_page_url <= max_page - 8 && current_page_url > 8) {
        var pre_max_page = document.getElementById('pre-last-page')
        pre_max_page.removeChild(pre_max_page.querySelector('.pagination__list-prev'))
        var pre_max = document.createElement('span')
        pre_max_page.appendChild(pre_max)
        pre_max.classList = 'pagination__list-prev'
        pre_max.innerHTML = '...'
    }

})

var moveCurrentPage = (current) => {
    document.getElementById('current-page').removeAttribute('id')
    page_links[--current].setAttribute('id', 'current-page')
}


var movePageNumbers = (side) => {
    for (let i = 0; i < page_links.length - 1; i++) {
        page_links[i].text = parseInt(page_links[i].text) + side
        page_links[i].dataset.page = parseInt(page_links[i].text)
    }
    changeHref()
}

