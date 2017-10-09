let apiURL:string = "https://jsonplaceholder.typicode.com/posts/1";
let fetch = require('node-fetch');

(async function (apiURL) {
    let response = await fetch(apiURL);
    console.log("response => ", response);
})(apiURL);