
export var parseUrl = (url) => {
    var parsedUrl = {
        endpoint: undefined,
        parameters: undefined,
        page: '1'
    }

    let keys = Object.keys(parsedUrl)

    url === '' ? url = ['everything', 'q=weather&sortBy=popularity'] : url = (window.location.search).slice(1).split('_')

    let url_pos = 0

    url.forEach(element => {
        parsedUrl[keys[url_pos]] = element
        url_pos++
    });
    parsedUrl.page =parsedUrl.page.slice(-1)
    return parsedUrl
}
