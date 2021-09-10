let bouton = document.querySelector("button");
let champsmail = document.querySelector("#inp_mail");
let regex = new RegExp("\\S+@\\S+\\.\\S+");
let champspass = document.querySelector("#inp_pass");
let mailmail = champsmail.value;
champsmail.addEventListener("input", checkpass);
let toutinpok = 0;

function checkpass() {
    if (regex.test(champsmail.value)) {

        // active button
        bouton.removeAttribute("disabled");
        toutinpok++;
        console.log("mail ok ?: ", toutinpok);
    }
    //verif du pass
}

document.querySelector("button").addEventListener("click", function () {
    let data = {
        username: champsmail.value,
        password: champspass.value
    }

    fetch('http://musics.logikstik.odns.fr/api/login', {
            method: 'POST',
            body: JSON.stringify(data),
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

        // catch
})
window.onload = () => {
    document.querySelector("#password").addEventListener("input", checkpass);

}

function checkpass() {
    let score = 0;
    let mdp = this.value;
    let minuscule = document.querySelector("#minuscule");
    let majuscule = document.querySelector("#majuscule");
    let chiffre = document.querySelector("#chiffre");
    let special = document.querySelector("#special");
    let longueur = document.querySelector("#longueur");

    if (/[a-z]/.test(mdp)) {
        minuscule.classList.replace("invalid", "valid");
        score++;
    } else {
        minuscule.classList.replace("valid", "invalid");
    }

    if (/[A-Z]/.test(mdp)) {
        majuscule.classList.replace("invalid", "valid");
        score++;
    } else {
        majuscule.classList.replace("valid", "invalid");
    }

    if (/[0-9]/.test(mdp)) {
        chiffre.classList.replace("invalid", "valid");
        score++;
    } else {
        chiffre.classList.replace("valid", "invalid");
    }

    if (/[$@!%*#&]/.test(mdp)) {
        special.classList.replace("invalid", "valid");
        score++;
    } else {
        special.classList.replace("valid", "invalid");
    }

    if (mdp.length >= 12) {
        longueur.classList.replace("invalid", "valid");
    } else {
        longueur.classList.replace("valid", "invalid");
    }
    let hjk = document.querySelector(".btn").style;
    console.log(hjk);
    if (score === 5) {
        document.querySelector(".btn").style.display = "initial";
    } else {
        document.querySelector(".btn").style.display = "none";
    }
}














//  let inscript = document.querySelector(".btn_inscription");
//  document.querySelector(".btn_inscription").addEventListener("click", function () {
//      window.location.href = "inscription.html";
//  });