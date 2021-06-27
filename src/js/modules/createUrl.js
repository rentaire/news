export var getUrl = (endpoints, parameters) => {
    var url = 'https://newsapi.org/v2/' +
        endpoints +
        '?' +
        parameters +
        '&apiKey=2bd6dd17600247a38a98d6bc50ef6368';
    return url
}


