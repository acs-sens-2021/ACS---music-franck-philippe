let token = sessionStorage.brouettetouk;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('id');
let image = document.querySelector(".img_source");
let sonname = document.querySelector(".name");
let artiste = document.querySelector(".artiste");
let piste = document.querySelector(".piste");
console.log("img ", image);
console.log("name ", sonname);
console.log("artiste ", artiste);
console.log("piste ", piste);

let monurl = `http://musics.logikstik.odns.fr/api/tracks/` + product;
fetch(monurl, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${token}`
        }
    })
    .then((response) => response.json())
    .then((json) => {
        
        piste.textContent = json.name;

        // ----- debut deuxieme fetch
        let monurl2 = `http://musics.logikstik.odns.fr${json.album}`;
        fetch(monurl2, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then((response) => response.json())
            .then((json) => {
                image.src = json.picture;
                sonname.textContent = json.name;
                // troisieme fetch   debut ***************
                let monurl3 = `http://musics.logikstik.odns.fr${json.artist}`;
                fetch(monurl3, {
                        method: 'GET',
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    .then((response) => response.json())
                    .then((json) => {
                        artiste.textContent = json.username;
                    })
                // troisieme fetch fin **************
            })






        // ----- fin deuxieme fetch



    })