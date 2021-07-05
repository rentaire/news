export var sendRequest = async (url) => {
  var req = new Request(url);
  let response = await fetch(req)
  //return response

  if (response.ok) {
    return response
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
  return 1

}


