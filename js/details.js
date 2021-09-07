let token = sessionStorage.brouettetouk;
let balisejackette = document.querySelector("#albumjackette");
// console.log("jacquette url", balisejackette);
const queryString = window.location.search;
// console.log(queryString);
let baliseh1 = document.querySelector("h1");
// console.log("hhhh ", baliseh1);
const urlParams = new URLSearchParams(queryString);
let nomartist = "";
const product = urlParams.get('id')
// console.log(product);
let urlartist = "";
let monurl = "http://musics.logikstik.odns.fr/api/albums/" + product;

console.log(monurl);

fetch(`${monurl}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${token}`
        }
    })
    .then((response) => response.json())

    .then((json) => {

        console.log("l'image jackette est : ", json.picture);
        balisejackette.src = json.picture;
        nomartist = json.artist;
        console.log("l'artiste ", nomartist);

        // ici debut fetch **** nom artist*****************************
        urlartist = `http://musics.logikstik.odns.fr${nomartist}`;
        console.log("URL >>> nomartist : ", urlartist);
        fetch(urlartist, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then((response) => response.json())

            .then((json) => {

                console.log("qui est l'artiste ? : ", json.username);
                baliseh1.textContent = json.username;

                // ici debut fetch **** tracks albums**********************

                // fetch(`http://musics.logikstik.odns.fr/api/......, {
                //         method: 'GET',
                //         headers: {
                //             'Content-type': 'application/json; charset=UTF-8',
                //             'Authorization': `Bearer ${token}`
                //         }
                //     })
                //     .then((response) => response.json())
                //     .then((json) => {
                //         voirtracks = json;
                //         for (count = 0; count<length ; count++) {
                //            
                //         }
                //     });



                // ici fin fetch **** tracks albums**********************

            });

        // ici fin fetch **** nom artist**********************






        // window.location = "../accueil.html";
    });