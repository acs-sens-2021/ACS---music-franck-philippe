let toutinputok = 0;
let nameuser = document.querySelector("#inp_name");
let champsmail = document.querySelector("#inp_mail");
let champspass = document.querySelector("#inp_pass");

let bouton = document.querySelector("button");
let regex = new RegExp("\\S+@\\S+\\.\\S+");
let mailmail = champsmail.value;
champsmail.addEventListener("input", checkpass);
function checkpass(){
    if (regex.test(champsmail.value)) {
        
        // active button
        // toutinpok++;
        // bouton.removeAttribute("disabled");
    }
//verif du pass
}

document.querySelector("button").addEventListener("click", function (){
    let data = {
        name : nameuser.value,
        email: champsmail.value,
        password: champspass.value
    }
    
    console.log("data ",data);
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
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        //  let inscript = document.querySelector(".btn_inscription");
        //  document.querySelector(".btn_inscription").addEventListener("click", function () {
        //      window.location.href = "inscription.html";
        //  });