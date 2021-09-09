let token = sessionStorage.brouettetouk;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('id');




let monurl = `http://musics.logikstik.odns.fr/api/tracks/` + product;
fetch(monurl, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${token}`
        }
    })
    .then((response) => response.json())
    .then((json) => {
        console.log("ici console-log ", json);

        



        // ----- debut deuxieme fetch


        let monurl2 = `http://musics.logikstik.odns.fr${json.album}`;
        fetch(monurl2, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then((response) => response.json())
            .then((json) => {



            })






        // ----- fin deuxieme fetch


  
    })