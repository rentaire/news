import { parseUrl } from './../modules/parseUrl.js'
import { createUrl } from './../modules/createUrl.js';
import { updateArticles } from './../modules/updateArticles.js'
import { page_size } from './../modules/constant.js'
import { showResult } from './../modules/showResult.js'
import { sendRequest } from './../modules/sendRequest'

let input = document.getElementById('text-to-find');

// input.addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//         event.preventDefault();

//         var q = input.value
//         var parsedUrl = {
//             endpoint: 'top-headlines',
//             parameters: 'q=' + q,
//             page: '1'
//         }

//         //history.pushState(null, null, '?top-headlines_q=' + q)

//         console.log(createUrl(parsedUrl))
//         updateArticles(createUrl(parsedUrl))
//         // updateArticles(createUrl(parseUrl(window.location.search)))
//     }
// });

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();

        

        var q = input.value
        var parsedUr = {
            endpoint: 'top-headlines',
            parameters: 'q=' + q,
            page: '1'
        }

        document.location.href = createUrl(parsedUr)

        sendRequest(createUrl(parsedUr)).then(function (response) {
            return response.json()
                .then((data) => {
                    deleteArticles(data.articles.length)
                    showResult(data.articles)
        
                    // let max_page = Math.ceil(data.totalResults / page_size)
                    // last_page.textContent = max_page
                    // last_page.setAttribute('data-page', max_page)
        
                    // createPaginationList(max_page)
                })
        })

    }
});

var deleteArticles = (length) => {
    for (let i = page_size - 1; i >= length; i--) {
        var articles_block = document.querySelector('.articles__block')
        articles_block.removeChild(document.querySelectorAll('.article')[i])
    }
}
