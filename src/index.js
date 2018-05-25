//Uso value con tolowecase para que lea todos los caracteres que ingrese el usuria y los pase a minuscula
var textoA=document.getElementById("mensajeingresado")

var botonA=document.getElementById("Cifra");
botonA.addEventListener("click",cifrarPorClick)
var textoB=document.getElementById("mensajeprocesado");
var botonB=document.getElementById("Decifra");
botonB.addEventListener("click",decifrarPorClick)



//Uso console para probar que los botones de cifrar y desifrar esten yendo bien//
function cifrarPorClick()
{
console.log("si sale");

}

function decifrarPorClick()
{
console.log("excelente");  
}

