
export var parseUrl = () => {
    var parsedUrl = {
        endpoint: undefined,
        parameters: undefined,
        page: ''
    }

    let keys = Object.keys(parsedUrl)
    let url

    window.location.search === '' ? url = ['everything', 'q=weather&sortBy=popularity'] : url = (window.location.search).slice(1).split('_')

    let url_pos = 0

    url.forEach(element => {
        parsedUrl[keys[url_pos]] = element
        url_pos++
    });
 
    return parsedUrl
}
