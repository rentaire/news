var url = 'https://newsapi.org/v2/everything?' +
    'q=Apple&' +
    'from=2021-06-23&' +
    'sortBy=popularity&' +
    'apiKey=2bd6dd17600247a38a98d6bc50ef6368';

var req = new Request(url);

fetch(req)
    .then(function (response) {
        return response.json()
    }).then((data) => {
        var article_counter = 0
        let articles = Array.from(document.querySelectorAll('.article'))
        articles.forEach(element => {
            element.querySelector('.article__img').src = data.articles[article_counter].urlToImage
            element.querySelector('.article__title').textContent = data.articles[article_counter].title
            element.querySelector('.author').textContent = data.articles[article_counter].author
            element.querySelector('.date').textContent = data.articles[article_counter].publishedAt
            element.querySelector('.article__description').textContent = data.articles[article_counter].description
            article_counter++
        });
    })