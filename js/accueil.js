let token = sessionStorage.brouettetouk;
let voirvingt;
let count = 0;
let tableaujacket = [];
// console.log("mon token est : ", token);

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
            console.log("count value ", count);
            tableaujacket[count] = voirvingt[count].picture;
            // console.log("picture : ", tableaujacket[count]);
            let jackette = document.querySelector(".templatefill");
            let defiler = document.querySelector(".defill_h");

            const clone = document.importNode(jackette.content, true);
            console.log("essai jack ", clone);
            const divslide = clone.querySelector(".slide");
            console.log("slide ", divslide);
            const imagejackette = clone.querySelector(".img_slide");
            console.log("image jackou ", imagejackette);
            imagejackette.src = tableaujacket[count];
            console.log("numero image ",imagejackette);
            console.log("imagejackette", imagejackette);
            defiler.appendChild(clone);
        }
    });