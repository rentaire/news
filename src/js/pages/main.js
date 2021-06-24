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
        articles.forEach(article => {
            article.querySelector('.article__img').src = data.articles[article_counter].urlToImage
            article.querySelector('.article__title').textContent = data.articles[article_counter].title
            article.querySelector('.author').textContent = data.articles[article_counter].author
            article.querySelector('.date').textContent = data.articles[article_counter].publishedAt
            article.querySelector('.article__description').textContent = data.articles[article_counter].description

            article.querySelector('.article__text').className += ' content-exist'
            article.href += data.articles[article_counter].source.id

            article_counter++
        });
    })