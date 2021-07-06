import { parseUrl } from './../modules/parseUrl.js'
import { createUrl } from './../modules/createUrl.js';
import { showResult } from './../modules/showResult.js';
import { sendRequest } from './../modules/sendRequest.js';


export function updateArticles(url) {
    sendRequest(createUrl(parseUrl(url))).then(function (response) {
        return response.json()
            .then((data) => {
                showResult(data.articles)
            })
    })
}
