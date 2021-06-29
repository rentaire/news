import { createUrl } from './../modules/createUrl.js'
import { showResult } from './../modules/newsApi.js'

let input = document.getElementById('text-to-find');

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        showResult(getUrl(`top-headlines`, `q=${input.value}`))
    }
});