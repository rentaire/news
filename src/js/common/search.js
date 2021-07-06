import { parseUrl } from './../modules/parseUrl.js'
import { createUrl } from './../modules/createUrl.js';
import { updateArticles } from './../modules/updateArticles.js'
import { page_size } from './../modules/constant.js'
import { showResult } from './../modules/showResult.js'
import { sendRequest } from './../modules/sendRequest'

let input = document.getElementById('text-to-find');

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        
        var q = input.value
        var parsedUr = {
            endpoint: 'top-headlines',
            parameters: 'q=' + q,
            page: '1'
        }

        document.location.href = 'articles.html?' + parsedUr.endpoint + '_' + parsedUr.parameters
    }
});

