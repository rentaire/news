
var max_page
var current_page


//var max = document.getElementsById('max-page')
//.text = maxPage
//console.log(max)

nextPage = () => {

    currentPage++
}

prevPage = () => {

    currentPage--
}


var btn_numbers = document.querySelectorAll('.pagination__list-page')
btn_numbers.forEach(num => {
num.text = ++num.text 
});