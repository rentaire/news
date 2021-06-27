import {getUrl} from './../modules/createUrl.js';
import {showResult} from './../modules/newsApi.js';

var type

window.location.search === '' ? type = ['?everything', 'sortBy=popularity'] :  type = (window.location.search).split('_')

// var url = 'https://newsapi.org/v2/' +
//     type[0].slice(1) +
//     '?' +
//     type[1] +
//     '&apiKey=2bd6dd17600247a38a98d6bc50ef6368';


var url = getUrl(type[0].slice(1), type[1])
showResult(url)


//var req = new Request(url);

/*fetch(req)
    .then(function (response) {
        return response.json()
    }).then((data) => {

        var article_counter = 0 // сколько уже заполнено
        var article_number = 0 // сейчас какая
        var articleValues = ['urlToImage', 'tite', 'author', 'publishedAtn', 'descriptio']
        var regHttps = RegExp('^https://')

        let articles = Array.from(document.querySelectorAll('.article'))

        articles.forEach(article => {

            article.querySelector('.article__img').src = data.articles[article_counter].urlToImage
            //  console.log(data.articles[article_counter].urlToImage)
            article.querySelector('.article__title').textContent = data.articles[article_counter].title
            article.querySelector('.author').textContent = data.articles[article_counter].author
            article.querySelector('.date').textContent = data.articles[article_counter].publishedAt
            article.querySelector('.article__description').textContent = data.articles[article_counter].description

            article.querySelector('.article__text').className += ' content-exist'

            article_counter++

            /*
              for (i = article_number; i < data.articles.length; i++) {
                  // console.log('Новый')
  
                  for (let j = 0; j < articleValues.length; j++) {
  
                      var nullValue = 0
  
                       ///^https::/.test(data.articles[article_counter].urlToImage) === false
  
                       console.log(data.articles[article_counter].urlToImage) 
                      
                      // console.log('aaaaaaaaaa' ,data.articles[i][articleValues[j]] == null)
                     // if (data.articles[i][articleValues[j]] === null ||
                          //  !(/^https:/.test(data.articles[article_counter].urlToImage))  ) {
                      if (data.articles[i][articleValues[j]] === null) {
                          console.log(data.articles[article_counter].urlToImage) 
                          // console.log(data.articles[article_counter].urlToImage === null)
                          // console.log(data.articles[article_counter].title === null)
                          // console.log(data.articles[article_counter].author === null)
                          // console.log(data.articles[article_counter].publishedAt === null)
                          // console.log(data.articles[article_counter].description === null)
                         // let a = data.articles[article_counter].urlToImag
                         
                         // console.log(/^https::/.test(data.articles[article_counter].urlToImage))
  
                          nullValue = 1
                          break
                      }
                  }
                  // console.log(data.articles[article_counter].urlToImage)
                  //  console.log(data.articles[article_counter].urlToImage === null)
              
                  //console.log((/^https::/.test(a)));
  
  
  
                  // console.log(data.articles[article_counter])
                  // console.log('feffefef', nullValue)
  
                  if (nullValue === 0) {
                      // console.log('I`m here', article_counter)
  
                      article.querySelector('.article__img').src = data.articles[article_counter].urlToImage
                      //  console.log(data.articles[article_counter].urlToImage)
                      article.querySelector('.article__title').textContent = data.articles[article_counter].title
                      article.querySelector('.author').textContent = data.articles[article_counter].author
                      article.querySelector('.date').textContent = data.articles[article_counter].publishedAt
                      article.querySelector('.article__description').textContent = data.articles[article_counter].description
  
                      article.querySelector('.article__text').className += ' content-exist'
  
                      article_counter++
  
                      break;
                  }
              }
              article_number++
  
              // article.href += data.articles[article_counter].source.id
  */

       /* });
    })*/