var botonPresionado = 0;
function Contador(){
    botonPresionado += 1;
    document.getElementById("boton").innerHTML = "Acariciaste el mapache " + botonPresionado + " veces";
};
function MapacheAcariciado(){
    document.getElementById("gif").src = 'imagenes/raccoonpet-noloop.gif'
};
function MapacheHero(){
    console.log("funciona")
    Contador()
    MapacheAcariciado()

};