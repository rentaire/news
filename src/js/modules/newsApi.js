import { getDate } from './dateToRu.js';

export var showResult = (url) => {
    var req = new Request(url);
    fetch(req)
        .then(function (response) {
            return response.json()
        }).then((data) => {

            var article_counter = 0 // сколько уже заполнено
            var article_number = 0 // сейчас какая
            var articleValues = ['urlToImage', 'tite', 'author', 'publishedAtn', 'descriptio']
            var regHttps = RegExp('^https://')

            let articles = Array.from(document.querySelectorAll('.article'))

            articles.forEach(article => {

                console.log(data)

                // article.querySelector('.article__img').src = data.articles[article_counter].urlToImage
                // article.querySelector('.article__title').textContent = data.articles[article_counter].title
                // article.querySelector('.author').textContent = data.articles[article_counter].author
                // article.querySelector('.date').textContent = getDate(data.articles[article_counter].publishedAt)
                // article.querySelector('.article__description').textContent = data.articles[article_counter].description

                // article.querySelector('.article__text').className += ' content-exist'

                // article_counter++


                for (let i = article_number; i < data.articles.length; i++) {

                    for (let j = 0; j < articleValues.length; j++) {

                        var nullValue = 0

                        if (data.articles[i][articleValues[j]] === null) {
                            // console.log(/^https::/.test(data.articles[article_counter].urlToImage))
                            //console.log(/^[a-zA-Zа-яА-Я]{2,10}( )[a-zA-Zа-яА-Я]{2,10}$/.test(data.articles[article_counter].author))
                            nullValue = 1
                            break
                        }
                    }
                    if (nullValue === 0) {
                        article.querySelector('.article__img').src = data.articles[article_counter].urlToImage
                        article.querySelector('.article__title').textContent = data.articles[article_counter].title
                        article.querySelector('.author').textContent = data.articles[article_counter].author
                        article.querySelector('.date').textContent = getDate(data.articles[article_counter].publishedAt)
                        article.querySelector('.article__description').textContent = data.articles[article_counter].description

                        article.querySelector('.article__text').className += ' content-exist'

                        article_counter++

                        break;
                    }
                }
                article_number++
            });
        })
}
