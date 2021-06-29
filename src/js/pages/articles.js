import { parseUrl } from './../modules/parseUrl.js'
import { createUrl } from './../modules/createUrl.js';
import {showResult} from './../modules/showResult.js';
import {sendRequest} from './../modules/sendRequest.js';
import { sortArticle } from './../modules/sortArticle.js';



var sort_btns = document.querySelectorAll('.sort__btn-type')

sort_btns.forEach(btn => {
    btn.addEventListener('click', function (event) {
        if (btn.classList.contains('arrowUp')) {
            btn.classList.remove('arrowUp')
            btn.classList.add('arrowDown')
        } else {
            btn.classList.remove('arrowDown')
            btn.classList.add('arrowUp')
        }
         console.log(btn.getAttribute('data-soprtby'))

        // sortArticle(sendRequest(createUrl(parseUrl())),btn.getAttribute('data-soprtby'))
    })
});


console.log(sendRequest(createUrl(parseUrl())))
//console.log(data)
//showResult(data)


var items = [
    {
        name: 'Edward',
        value: 21
    },
    {
        name: 'Sharpe',
        value: 37
    },
    {
        name: 'And',
        value: 45
    },
    {
        name: 'The',
        value: -12
    },
    {
        name: 'Magnetic'
    },
    {
        name: 'Zeros', value: 37
    }
];


var articles =  [

    {
        "source": {
            "id": null,
            "name": "Newsonjapan.com"
        },
        "author": null,
        "title": "Z",
        "description": "Hedge funds and asset managers are increasingly turning to Japanese startups, attracted by some eye-popping past returns in the long-overlooked sector. (Japan Times)",
        "url": "https://newsonjapan.com/html/newsdesk/article/131263.php",
        "urlToImage": null,
        "publishedAt": "2021-06-29T05:20:42Z",
        "content": "Asian hedge fund firms including Pleiad Investment Advisors and global investment giants like T. Rowe Price Group Inc. and Baillie Gifford are providing late-stage growth capital to the nations most … [+1587 chars]"
    },
    {
        
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Reuters",
        "title": "Elon Musk set to tout Starlink progress as cost, demand hurdles linger",
        "description": "Musk on Tuesday is expected to discuss Starlink's progress in a speech at the Mobile World Congress telecommunications event",
        "url": "https://www.livemint.com/companies/people/elon-musk-set-to-tout-starlink-progress-as-cost-demand-hurdles-linger-11624943615747.html",
        "urlToImage": "https://images.livemint.com/img/2021/06/29/600x338/Musk_1621360830504_1624943642021.jpg",
        "publishedAt": "2021-06-29T05:15:36Z",
        "content": "Don Joyce, a Nokia director working from home at a remote lake cottage in Canada, recently abandoned his painfully slow phone-line internet in favor of satellite broadband service Starlink, offered b… [+5483 chars]"
    },
    {
        
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Reuters",
        "title": "B",
        "description": "Musk on Tuesday is expected to discuss Starlink's progress in a speech at the Mobile World Congress telecommunications event",
        "url": "https://www.livemint.com/companies/people/elon-musk-set-to-tout-starlink-progress-as-cost-demand-hurdles-linger-11624943615747.html",
        "urlToImage": "https://images.livemint.com/img/2021/06/29/600x338/Musk_1621360830504_1624943642021.jpg",
        "publishedAt": "2021-06-29T05:15:36Z",
        "content": "Don Joyce, a Nokia director working from home at a remote lake cottage in Canada, recently abandoned his painfully slow phone-line internet in favor of satellite broadband service Starlink, offered b… [+5483 chars]"
    }
]

// sortArticle(articles, 'title')
// console.log(articles)

//console.log(articles)

// var max_page = 13 //page_size
// var current_page = parseUrl.page


// var max = document.getElementById('max-page')
// max.textContent = max_page

// var nextPage = () => {
//     movePageNumber(1)
//     current_page++
// }


// var prevPage = () => {
//     movePageNumber(-1)
//     current_page--
// }


// var movePageNumber = (side) => {
//     var btn_numbers = document.querySelectorAll('.pagination__list-page')
//     btn_numbers.forEach(num => {
//         num.text = num.text + side
//     });
// }

