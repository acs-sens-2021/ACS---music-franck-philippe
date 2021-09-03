let compteur = 0; // Compteur qui permet de connaître l'image sur laquelle on se trouve
let timer, elements, slides, slideWidth, speed, transition;

window.onload = () => {
    // On récupère le diaporama
    const diapo = document.querySelector(".defill_h");
    // On récupère le data-speed
    speed = diapo.dataset.speed;
    transition = diapo.dataset.transition;
    elements = document.querySelector(".defill_h");
// console.log("elements de defill_h",elements);
    // On clone la 1ère image
    let firstImage = elements.firstElementChild.cloneNode(true);
console.log("clone first ",firstImage);
    // On injecte le clone à la fin du diapo
    elements.appendChild(firstImage);

    slides = Array.from(elements.children);

    // On récupère la largeur d'une slide
    slideWidth = diapo.getBoundingClientRect().width;

    // On récupère les flèches
    let next = document.querySelector("#nav-droite");
    let prev = document.querySelector("#nav-gauche");

    // On gère le clic
    next.addEventListener("click", slideNext);
    prev.addEventListener("click", slidePrev);

    // On automatise le défilement
    timer = setInterval(slideNext, speed);

    // On gère l'arrêt et la reprise
    diapo.addEventListener("mouseover", stopTimer);
    diapo.addEventListener("mouseout", startTimer);
}

/**
 * Cette fonction fait défiler le diaporama vers la droite
 */
function slideNext(){
    // On incrémente le compteur
    compteur++;
    elements.style.transition = transition+"ms linear";

    let decal = -slideWidth * compteur;
    elements.style.transform = `translateX(${decal}px)`;

    // On attend la fin de la transition et on "rembobine" de façon cachée
    setTimeout(function(){
        if(compteur >= slides.length - 1){
            compteur = 0;
            elements.style.transition = "unset";
            elements.style.transform = "translateX(0)";
        }
    }, transition);
}

/**
 * Cette fonction fait défiler le diaporama vers la gauche
 */
function slidePrev(){
    // On décrémente le compteur
    compteur--;
    elements.style.transition = transition+"ms linear";

    if(compteur < 0){
        compteur = slides.length - 1;
        let decal = -slideWidth * compteur;
        elements.style.transition = "unset";
        elements.style.transform = `translateX(${decal}px)`;
        setTimeout(slidePrev, 1);
    }

    let decal = -slideWidth * compteur;
    elements.style.transform = `translateX(${decal}px)`;
    
}

function stopTimer(){
    clearInterval(timer);
}

function startTimer(){
    timer = setInterval(slideNext, speed);
}






//*************----------***********----------**** */
let token = sessionStorage.brouettetouk;
let voirvingt;
let count = 0;

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
            let tableaujacket = voirvingt[count].picture;
            // console.log("picture : ", tableaujacket[count]);
            let jackette = document.querySelector(".templatefill");
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