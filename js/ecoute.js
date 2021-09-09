let token = sessionStorage.brouettetouk;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('id');

const template = document.querySelector(".template_ecoute");


let monurl = `http://musics.logikstik.odns.fr/api/albums/131`;
fetch(`${monurl}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${token}`
        }
    })
    .then((response) => response.json())
    .then((json) => {
        console.log("album", json.name);

        const inject = document.querySelector(".injection_ecoute");
        const clone = document.importNode(template.content, true);
        console.log("clone", clone);
        let image = clone.querySelector("img");
        image.src = json.picture;
        console.log("img", image);

        let contenu = clone.querySelector(inject);
        console.log("contenu",contenu);







        inject.appendchild(clone);
    })