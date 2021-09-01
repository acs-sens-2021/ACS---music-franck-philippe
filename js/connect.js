let bouton = document.querySelector("button");
console.log("mon bouton", bouton);
 //  let inscript = document.querySelector(".btn_inscription");
//  document.querySelector(".btn_inscription").addEventListener("click", function () {
//      window.location.href = "inscription.html";
//  });
let champsmail = document.querySelector("#inp_mail");
console.log("input mail",champsmail.value );

let regex = new RegExp("/\\S+@\\S+\\.\\S+/");

let champspass = document.querySelector("#inp_pass");
console.log("input pass",champspass.value );

champsmail.addEventListener("input", checkpass);

function checkpass(){
    let mailmail = this.value;
    if (regex.test(mailmail)) {
        // active button
        bouton.removeAttribute("disabled");
    }}
    












 let data = {
    username: 'franck@example.com',
    password: "doublestring"
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
        sessionStorage.touktouk = json.token;
    });
