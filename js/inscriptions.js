

let lename = document.querySelector("#inp_name").value;
let email = document.querySelector("#inp_mail").value;
let password = document.querySelector("#inp_pass").value;
let pwd = document.querySelector("#inp_pass");
let regex = new RegExp("\\S+@\\S+\\.\\S+");
pwd.addEventListener("input", function () {
    let saisie = this.value;
    let message = this.nextElementSibling;
    if (saisie.length >= 12 && /[A-Z]/.test(saisie) && /[a-z]/.test(saisie) && /[0-9]/.test(saisie) && /[$@!%*#&]/.test(saisie)) {
        message.textContent = "Mot de passe fort";
        message.style.color = "green";
        message.style.border = "2px solid green";
        message.style.margin = "10px auto 0 auto";
        message.style.padding = "10px";
        message.style.background = "#e43936";
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
                .then((json) => function(){
                    window.location="../accueil.html";
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        });
    } else {
        message.style.padding = "5px";
        message.style.color = "red";
        message.style.border = "4px solid red";
        message.style.margin = "15px auto 0 auto";
        message.textContent = "Mot de passe faible";
        message.style.background = "#fff";
    }
})