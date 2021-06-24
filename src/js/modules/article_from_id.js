const id = window.location.search.slice(4)


//console.log(isEmpty(id))
//console.log(window.location.search.replace('?id=', '=') == null)
// while (id !== 'null') {
//     count++
// }

var url = 'https://newsapi.org/v2/top-headlines?' +
    'sources=' + id +
    '&apiKey=2bd6dd17600247a38a98d6bc50ef6368'

//var req = new Request(url);

fetch(req)
    .then(function (response) {
        return response.json()
    }).then((data) => {
        let article = document.querySelector('.article')

        article.querySelector('.article__img').src = data.articles[count].urlToImage
        article.querySelector('.article__title').textContent = data.articles[count].title
        article.querySelector('.author').textContent = data.articles[count].author
        article.querySelector('.date').textContent = data.articles[count].publishedAt
        article.querySelector('.article__content').textContent = data.articles[count].content
    })