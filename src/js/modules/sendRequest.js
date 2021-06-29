// export function sendRequest(url) {
//     var req = new Request(url);
//     fetch(req)
//         .then(function (response) {
//             return response.json()
//         }).then((data) => {
//             //или data.articles?
//             return data.articles
//         })
// }

export async function sendRequest(url) {
        var req = new Request(url)
        let data = await fetch(url).then(res => res.json())
        return data

}

