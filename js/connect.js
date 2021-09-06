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
})















//  let inscript = document.querySelector(".btn_inscription");
//  document.querySelector(".btn_inscription").addEventListener("click", function () {
//      window.location.href = "inscription.html";
//  });