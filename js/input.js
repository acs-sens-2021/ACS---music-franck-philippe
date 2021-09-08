let toutinputok = 0;
let nameuser = document.querySelector("#inp_name");
nameuser.textContent ="";
let champsmail = document.querySelector("#inp_mail");
champsmail.textContent = "";
let champspass = document.querySelector("#inp_pass");
champspass.textContent = "";
let score = 0;
let bouton = document.querySelector("button");
let score1, score2, score3, score4, score5 ;
let regex = new RegExp("\\S+@\\S+\\.\\S+");
let mailmail = champsmail.value;
champsmail.addEventListener("input", checkpass);
let lescore = 0;
// ici fonction de validation *****************************/////////
function checkpass() {
    if (regex.test(champsmail.value)) {

        // active button
        // toutinpok++;
        // bouton.removeAttribute("disabled");
    }
    //verif du pass
}
// document.querySelector("#inp_pass").addEventListener("input", validation);
champspass.addEventListener("input", validation);
function validation() {
console.log("je verifie la frappe ", score);
let mdp = this.value;

if (/[a-z]/.test(mdp)) {
        console.log("/[a-z]/.test(mdp) ", score);
        score1 = 1;
    }else{
        score1 = 0;
    }

    if (/[A-Z]/.test(mdp)) {
        console.log("[A-Z]/.test(mdp) ", score);
        score2 = 1;
    }else{
        score2 = 0;
    }
    if (/[0-9]/.test(mdp)) {
        console.log("/[0-9]/.test(mdp) ", score);
        score3 = 1;
    }else{
        score3 = 0;
    }
    if (/[$@!%*#&]/.test(mdp)) {
        console.log("/[$@!%*#&]/.test(mdp ", score);
        score4 = 1;
    }else{
        score4 = 0;
    }
    if (mdp.length >= 12) {
        console.log("mdp.length >= 12 ", score);
        score5 = 1;
    }else{
        score5 = 0;
    }
}
console.log("scorescore ",lescore);
    // pass pass pass
    lescore = score1 +  score2 + score3 + score4 + score5 ;
    if (lescore === 5) {
        console.log("validation passs ", score);

    
    document.querySelector("button").addEventListener("click", function () {
        let data = {
            name: nameuser.value,
            email: champsmail.value,
            password: champspass.value
        }

        console.log("data ", data);
        fetch('http://musics.logikstik.odns.fr/api/users', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
            .then((response) => response.json())

            .then((json) => {

                window.location = "../connect.html";

            });
    }
    )
}
