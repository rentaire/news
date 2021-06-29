//import { getDate } from './dateToRu.js';

export function showResult(data) {
    let articles = Array.from(document.querySelectorAll('.article'))

    articles.forEach(article => {
        article.querySelector('.article__img').src = data.articles[article_counter].urlToImage
        article.querySelector('.article__title').textContent = data.articles[article_counter].title
        article.querySelector('.author').textContent = data.articles[article_counter].author
        article.querySelector('.date').textContent = getDate(data.articles[article_counter].publishedAt)
        article.querySelector('.article__description').textContent = data.articles[article_counter].description

        article.querySelector('.article__text').className += ' content-exist'

        article_counter++
    });

}