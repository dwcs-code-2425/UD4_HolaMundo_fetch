window.onload = function () {
    onceLoaded();
};


// window.onload = async function () {   
//     await onceLoadedAwait();
// };

//https://reqres.in/ API de prueba
function onceLoaded() {
    console.log('Iniciando llamada con fetch ...');
    fetch('https://reqres.in/api/users')
        .then(data => {
            console.log('Se ha recibido la respuesta del servidor...');
            return data.json();
        })
        .then(users => {
            console.log('Se ha acabado de procesar la respuesta del servidor  y se ha convertido a Json...');
            data = users.data;
            procesarJSON(data);
        }
        )
        .catch((err) => console.error("error:", err));
    console.log('Seguimos procesando de forma asíncrona lo que haya después del fetch...')

}


async function onceLoadedAwait() {

    //https://reqres.in/ API de prueba

    try {
        let response = await fetch('https://reqres.in/api/users');
        if (response.ok === true) {
            let users = await response.json();
            data = users.data;
            procesarJSON(data);

        }

        else {
            console.error("Error-HTTP: " + response.status);
        }
    }
    catch (error) {
        console.error("Error: " + error);
    }
}

function procesarJSON(data) {

    console.log('Los datos obtenidos son: ' + data);


    let lista = document.createElement("ul");
    for (var i = 0; i < data.length; i++) {
        let elem = document.createElement("li");
        elem.innerHTML = data[i].email;
        lista.appendChild(elem);
    }

    var body = document.getElementById("users");
    body.innerHTML = "";
    body.appendChild(lista);
}