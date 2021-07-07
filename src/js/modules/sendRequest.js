export var sendRequest = async (url) => {
  var req = new Request(url);
  const response = await fetch(req) // req = url

  if (response.ok) {
    return response
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
  return 1

}


