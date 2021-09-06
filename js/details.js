// let url = window.location.href;

// let gg = url.substring(url.lastIndexOf('=') + 1);

// console.log("id recuperer 1", gg);

const queryString = window.location.search;
console.log (queryString);
const urlParams = new URLSearchParams (queryString);

const product = urlParams .get ('id')
console.log (product);

