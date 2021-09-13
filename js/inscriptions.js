window.onload = () => {
    document.querySelector("#inp_pass").addEventListener("input", checkpass);

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
}
let lename = document.querySelector("#inp_name").value;
let email = document.querySelector("#inp_mail").value;
let password = document.querySelector("#inp_pass").value;

let pwd = document.querySelector("#inp_pass");
pwd.style.border = "2px solid red";

let regex = new RegExp("\\S+@\\S+\\.\\S+");
pwd.addEventListener("input", function () {
    let saisie = this.value;
    // let message = this.nextElementSibling;


    let bouton = document.querySelector("#button-register");
    bouton.addEventListener("click", function () {
        let url = `http://musics.logikstik.odns.fr/api/users`;
        fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    name: lename,
                    email: email,
                    password: saisie
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
            .then((response) => response.json())
            .then((json) => function () {
                window.location = "../accueil.html";
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });
})

