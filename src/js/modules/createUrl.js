import { page_size} from './constant.js'

export var createUrl = (parsedUrl) => {
    var url = 'https://newsapi.org/v2/' +
        parsedUrl.endpoint +
        '?' +
        parsedUrl.parameters +
        '&pageSize=' + page_size + 
        parsedUrl.page +
        '&apiKey=2bd6dd17600247a38a98d6bc50ef6368';
    return url
}


