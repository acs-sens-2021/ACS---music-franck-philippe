let token = sessionStorage.brouettetouk;
let balisejackette = document.querySelector("#albumjackette");
// console.log("jacquette url", balisejackette);
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('id');
// console.log(queryString);
let baliseh1 = document.querySelector("h1");
// console.log("hhhh ", baliseh1);
let nomartist = "";
// console.log("productou", product);
let urlartist = "";
let monurl = "http://musics.logikstik.odns.fr/api/albums/" + product;
let zonetrack = document.querySelector(".templatetracks");
// console.log("templettou ", zonetrack);
let divinjection = document.querySelector(".contenu");
// console.log("inject  ", divinjection);
let nompistou = document.querySelector(".nompiste");
// console.log("name pistou ", nompistou);
let tempspiste = document.querySelector(".timer");
// console.log("temp piste ", tempspiste);


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

        // console.log("l'image jackette est : ", json.picture);
        balisejackette.src = json.picture;
        nomartist = json.artist;
        // console.log("l'artiste ", nomartist);

        // ici debut fetch **** nom artist*****************************
        urlartist = `http://musics.logikstik.odns.fr${nomartist}`;
        // console.log("URL >>> nomartist : ", urlartist);
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

                let urltrack = `http://musics.logikstik.odns.fr/api/albums/${product}`;

                fetch(urltrack, {
                        method: 'GET',
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    .then((response) => response.json())
                    .then((json) => {
                        // console.log("tracksou ", json.tracks);
                        let voirtracks = json.tracks;
                        // console.log("voi ", voirtracks.length);
                        for (let count = 0; count < voirtracks.length; count++) {
                            // console.log("tracks: " + count + " _piste " + voirtracks[count]);

                            // ici debut fetch cherche tracks  *********************
                            let nouvelleurl = `http://musics.logikstik.odns.fr${voirtracks[count]}`;
                            fetch(nouvelleurl, {
                                    method: 'GET',
                                    headers: {
                                        'Content-type': 'application/json; charset=UTF-8',
                                        'Authorization': `Bearer ${token}`
                                    }
                                })
                                .then((response) => response.json())
                                .then((json) => {
                                    const clone = document.importNode(zonetrack.content, true);
                                    const spanun = clone.querySelector(".nompiste");

                                    let templateorder = clone.querySelector(".template_liste");
                                    templateorder.style.order = count;
                                    const spantime = clone.querySelector(".timer");
                                    if (count < 10) {
                                        count = " " + count;
                                    }
                                    spanun.textContent = `${count} : ${ json.name}`;
                                    let timertoto = json.time;
                                    let minutes = Math.floor(timertoto / 60000);
                                    let rest = timertoto % 60000;
                                    console.log("rest ", rest);
                                    let secondes = Math.floor(rest / 1000);
                                    if (secondes < 10) {
                                        secondes = "0" + secondes;
                                    }
                                    spantime.textContent = minutes + ":" + secondes;
                                    divinjection.appendChild(clone);

                                });


                            // ici fin fetch cherche tracks  *********************
                        }
                    });
                // ici fin fetch **** tracks albums**********************
            });
        // ici fin fetch **** nom artist**********************
        // window.location = "../accueil.html";
    });