import { getUrl } from './../modules/createUrl.js'
import { showResult } from './../modules/newsApi.js'

let input = document.getElementById('text-to-find');



// input.addEventListener('input', () => {
//    // showResult(getUrl(`top-headlines`, `q=${input.value}`))
// });

// document.getElementById('search').onsubmit = function(){
//     alert(this.anything.value);
//           return false;
//     }

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        showResult(getUrl(`top-headlines`, `q=${input.value}`))
    }
});