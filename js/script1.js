function onceLoaded() {
    console.log('La página ha terminado de cargarse!!');
    let grButton = document.getElementById("greetButton");
    grButton.onclick = greetMe;
}


function greetMe() {
    let nombre = document.getElementById("nombre");
    alert('¡Hola, ' + nombre.value + '!');
}


window.onload = function () {
    //Cuando termine de cargarse la página, se llama a onceLoaded();
    onceLoaded();
};
//Sería lo mismo que
//window.addEventListener('load', function () {
//  onceLoaded();
//   
//   
//});


