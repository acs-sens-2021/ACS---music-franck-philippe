

 //  let inscript = document.querySelector(".btn_inscription");
//  document.querySelector(".btn_inscription").addEventListener("click", function () {
//      window.location.href = "inscription.html";
//  });

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
