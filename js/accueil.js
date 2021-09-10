let token = sessionStorage.brouettetouk;
let voirvingt;
let voirhuit;
let count = 0;

fetch(`http://musics.logikstik.odns.fr/api/albums/?order[created_at]=desc`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${token}`
        }
    })
    .then((response) => response.json())
    .then((json) => {
        voirvingt = json;
        for (count = 0; count < 20; count++) {
            let tableaujacket = voirvingt[count].picture;

            let jackette = document.querySelector(".templatefill_h");
            let identitejackette = voirvingt[count].id;
            // console.log("id jackette", identitejackette);
            let defiler = document.querySelector(".defill_h");
            const clone = document.importNode(jackette.content, true);
            let baliseA = clone.querySelector(".jackettecliquable");
            baliseA.href = "details.html?id=" + identitejackette;
            // console.log("balise A ", baliseA);
            const imagejackette = clone.querySelector(".img_slide");
            imagejackette.src = tableaujacket;
            defiler.appendChild(clone);

        }
    });
fetch(`http://musics.logikstik.odns.fr/api/albums/?order=recently_played`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${token}`
        }
    })
    .then((response) => response.json())

    .then((json) => {
        voirhuit = json;
        console.log("les huit ", voirhuit);
        for (count = 0; count < 8; count++) {

            let tableaujacket2 = voirhuit[count].picture;
            let played = voirhuit[count].id;

            let jackette2 = document.querySelector(".templategrill");
            let defiler2 = document.querySelector(".grill");


            const clone = document.importNode(jackette2.content, true);
            const imagejackette = clone.querySelector(".img_slidex2");
            const playedliste = clone.querySelector(".playedcliquable");
            playedliste.href="details.html?id=" + played ;
            console.log("playeuuuuudliste", playedliste);
            imagejackette.src = tableaujacket2;

            defiler2.appendChild(clone);
        }
    });