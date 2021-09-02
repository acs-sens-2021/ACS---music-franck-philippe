let token = sessionStorage.brouettetouk;
let voirvingt ;
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
       
    });