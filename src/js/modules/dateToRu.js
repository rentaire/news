var options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  }
  
export function getDate(str) {
    var date = new Date(str);
    return date.toLocaleString('ru', options)
  }