
//*************----------***********----------**** */
let token = sessionStorage.brouettetouk;
let voirvingt;
let voirhuit;
let count = 0;
let lienalbum = document.querySelector(".clickalbum");
console.log("lien a",lienalbum);
console.log("mon token est : ", token);

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
        console.log("les albums ", voirvingt);
        for (count = 0; count < 20; count++) {
            // console.log("count value ", count);
            let tableaujacket = voirvingt[count].picture;
            // console.log("picture : ", tableaujacket[count]);
            let jackette = document.querySelector(".templatefill_h");
            let defiler = document.querySelector(".defill_h");

            const clone = document.importNode(jackette.content, true);
            // console.log("essai jack ", clone);
            // const divslide = clone.querySelector(".slide");
            // console.log("slide ", divslide);
            const imagejackette = clone.querySelector(".img_slide");
            // console.log("image jackou ", imagejackette);
            imagejackette.src = tableaujacket;
            // console.log("numero image ",imagejackette);
            // console.log("imagejackette", imagejackette);
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
            // console.log("count value ", count);
            let tableaujacket2 = voirhuit[count].picture;
            // console.log("tab2 ",tableaujacket2);
            // console.log("picture : ", tableaujacket[count]);
            let jackette2 = document.querySelector(".templategrill");
            let defiler2= document.querySelector(".grill");
// console.log("defiler2 :",defiler2);
            const clone = document.importNode(jackette2.content, true);
            // console.log("essai jack ", clone);
            // const divslide = clone.querySelector(".slide");
            // console.log("slide ", divslide);
            const imagejackette = clone.querySelector(".img_slidex2");
            // console.log("image jackou ", imagejackette);
            imagejackette.src = tableaujacket2;
            // console.log("numero image ",imagejackette);
            // console.log("imagejackette", imagejackette);
            defiler2.appendChild(clone);
        }
    });

