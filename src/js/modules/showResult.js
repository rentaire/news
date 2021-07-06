import { getDate } from './dateToRu.js';

export function showResult(data) {
    let articles = Array.from(document.querySelectorAll('.article'))
    var article_counter = 0
    console.log(data)
    articles.forEach(article => {
        article.querySelector('.article__img').src = data[article_counter].urlToImage
        article.querySelector('.article__title').textContent = data[article_counter].title

        if (/^[a-zA-Zа-яА-Я]{2,10}( )[a-zA-Zа-яА-Я]{2,10}$/.test(data[article_counter].author)) {
            article.querySelector('.author').textContent = data[article_counter].author
        } else {
            article.querySelector('.author').textContent = 'No author'
        }

        article.querySelector('.date').textContent = getDate(data[article_counter].publishedAt)
        article.querySelector('.article__description').textContent = data[article_counter].description

        article.querySelector('.article__text').className += ' content-exist'

        article_counter++
    });

}
