// Declaracion de variables
let entradaPrimaria;
let datosEncriptados;
let codigos = ["ai","enter","imes","ober","ufat"];
let entradaDatos = document.getElementById("entrada");
let boton = document.getElementById("encrip");
let imagen = document.getElementById("muneco");
let botonDes = document.getElementsByClassName("desencriptar");
let myButton = document.querySelector(".copiar");
let myText = document.querySelector(".salida");

//Funciones para el ingreso de texto en tiempo real
entradaDatos.addEventListener("input", function() {
    let texto = this.value;
    console.log(texto);
    entradaPrimaria = texto;
});

//Evento para la activacion del boton copiar
myButton.addEventListener('click', () => {
    navigator.clipboard.writeText(myText.textContent)
        .then(() => {
            console.log('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('No se pudo copiar el texto: ', err);
        });
});

//Funcion para incriptar el texto
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function encriptar(){
    let codigosObj = {a: codigos[0], e: codigos[1], i: codigos[2], o: codigos[3], u: codigos[4]};
    datosEncriptados = entradaPrimaria.replace(/[aeiou]/g, function(match) {
        return codigosObj[match];
    });

    console.log(entradaPrimaria + " Estos son los datos mientras se encriptan");
    console.log(datosEncriptados + " Estos son los datos encriptados");
    document.getElementsByClassName("salida")[0].innerHTML = datosEncriptados;
    entradaDatos.value = "";
    entradaDatos.focus();
}
//funcion para desencriptar el texto
function desencriptar() {
    console.log("hola")
    let codigosObj = {a: codigos[0], e: codigos[1], i: codigos[2], o: codigos[3], u: codigos[4]};
    let reverseCodigosObj = {};
    for (let key in codigosObj) {
        reverseCodigosObj[codigosObj[key]] = key;
    }
    let datosDesencriptados = entradaPrimaria.replace(new RegExp(Object.keys(reverseCodigosObj).join('|'), 'g'), function(match) {
        return reverseCodigosObj[match];
    });

    console.log(datosEncriptados + " Estos son los datos mientras se desencriptan");
    console.log(datosDesencriptados + " Estos son los datos desencriptados");
    document.getElementsByClassName("salida")[0].innerHTML = datosDesencriptados;
    entradaDatos.value = "";
    entradaDatos.focus();
}

//funciona para validar mayuscula y minusculas
function esMinusculas(letra){
    return letra === letra.toLowerCase();

}

//condicion para validar 
let condicion = true;
function validarEncriptado(){
    for (let x = 0; x < entradaPrimaria.length; x++){
        if (!esMinusculas(entradaPrimaria[x]) && entradaPrimaria[x] !== " "){
            alert("Todas las letras deben ser minusculas y sin caracteres especiales!");
            condicion = false;
            break;
        } 
    }

   if (condicion){
        encriptar(); 
   }

}

/*Al hacer clic en el botón "Encriptar", se activa un evento que llama a la función validarEncriptado. 
Esta función se encarga de asegurarse de que el texto no contenga mayúsculas
ni caracteres especiales antes de proceder con el encriptado.
*/
boton.onclick = validarEncriptado;

/*Finalmente, se invoca la función desencriptar, la cual revierte cualquier cambio realizado o 
descifra cualquier mensaje que ya haya sido encriptado.
*/
botonDes[0].onclick = desencriptar;


