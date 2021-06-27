import {getUrl} from './../modules/createUrl.js'

let input = document.getElementById('search-input');

input.addEventListener('input', () => {
    getUrl(`top-headlines`, `q=${input.value}`)
    
});