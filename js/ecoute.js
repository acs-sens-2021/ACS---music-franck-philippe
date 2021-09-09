let token = sessionStorage.brouettetouk;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('id');

const template = document.querySelector(".template_ecoute");


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
console.log("ici console-log ", json);
        const clone = document.importNode(template.content, true);
        const inject = document.querySelector(".injection_ecoute");

        const clonename = clone.querySelector(".name");
        const cloneartiste = clone.querySelector(".artiste");

        let image = clone.querySelector("img");
        image.src = json.picture;



        clonename.textContent = json.name;
        // console.log("album ", clonename);

        // ----- debut deuxieme fetch


        let monurl2 = `http://musics.logikstik.odns.fr/albums/${json.album}`;
        fetch(monurl2, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then((response) => response.json())
            .then((json) => {
                // console.log("artiste: ", json.username);
                cloneartiste.textContent = json.username;
                
            })






        // ----- fin deuxieme fetch


        inject.appendChild(clone);
    })