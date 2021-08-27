 window.setTimeout(redirectionSansDelai, 4000);


 function redirectionSansDelai() {
     window.location.href = "connect.html";
 };

 //  let inscript = document.querySelector(".btn_inscription");
 document.querySelector(".btn_inscription").addEventListener("click", function () {
     window.location.href = "inscription.html";
 });