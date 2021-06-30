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

page_links.forEach(link => {
    link.addEventListener('click', (event) => {
        console.log(link.getAttribute('data-page'))
        document.location.href = window.location.search + '_page=' + link.getAttribute('data-page')
    })
});

//sendRequest()


var max_page = 13 //page_size
var current_page_el = document.getElementById('current-page')
var current_page_num = current_page_el.getAttribute('data-page')

var stop_page = 3

var current_page_url = parseUrl.page


var max = document.getElementById('max-page')
max.textContent = max_page


var nextPage = document.getElementById('pagination-next').addEventListener('click', (event) => {
    current_page_num < stop_page ? moveCurrentPage(current_page_num++) : movePageNumbers(1)
    current_page_url++
})


var prevPage = document.getElementById('pagination-prev').addEventListener('click', (event) => {
    current_page_num < stop_page ? moveCurrentPage(current_page_num--) : movePageNumbers(-1)
    current_page_url--
})

var moveCurrentPage = (next_page) => {
 //   console.log(page_links[current_page_num].classList)
    page_links[current_page_num].classList.remove('current-page')
  //  console.log(page_links[current_page_num].classList)
    page_links[next_page].className += 'current-page'
}


var movePageNumbers = (side) => {
    page_links.forEach(page_num => {
        page_num.text = parseInt(page_num.text) + side
        page_num.dataset.page = parseInt(page_num.text)
    });
}

