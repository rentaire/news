arrowChange = function (obj) {
    if (obj.classList.contains('arrowUp')) {
        obj.classList.remove('arrowUp')
        obj.classList.add('arrowDown')
    } else {
        obj.classList.remove('arrowDown')
        obj.classList.add('arrowUp')
    }

}