export function sortAscending(obj, parametr) {
    obj.sort(function (a, b) {
    if (a[parametr] > b[parametr]) {
        return 1;
    }
    if (a[parametr] < b[parametr]) {
        return -1;
    }
    return 0;
});
return obj
}

export function sortDescending (obj, parametr) {
    obj.sort(function (a, b) {
    if (a[parametr] < b[parametr]) {
        return 1;
    }
    if (a[parametr] > b[parametr]) {
        return -1;
    }
    return 0;
});
return obj
}