// let url = window.location.href;

// let gg = url.substring(url.lastIndexOf('=') + 1);

// console.log("id recuperer 1", gg);

const queryString = window.location.search;
console.log (queryString);
const urlParams = new URLSearchParams (queryString);

const product = urlParams .get ('id')
console.log (product);

let monurl = "http://musics.logikstik.odns.fr/api/albums" + product;

console.log(monurl);

fetch('http://musics.logikstik.odns.fr/api/albums', {
    method: 'GET',
    
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
})
.then((response) => response.json())

.then((json) => {
    sessionStorage.brouettetouk = json.token;
    console.log("le token est : ", json.token);
    window.location = "../accueil.html";
});