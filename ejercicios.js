//Ejercicio1 Calcular el área de un triángulo
function calculaArea(){
    let base=document.querySelector("#base").value
    let altura=document.querySelector("#altura").value
    let resultado = (base * altura) / 2;
    alert("el área es: " + resultado)
}

//Ejercicio2 Convertir grados Celsius a Fahrenheit
//Fórmula para convertir grados celsius a grados fahrenheit: °F = (°C x 9/5) + 32
function celsiusaFahrenheit(){
    let celsius = parseFloat(document.querySelector("#celsius").value)
    let resultado = celsius * 1.8 + 32;
    alert(celsius + " °C = " + resultado + " °F")
}

//Ejercicio3 Encontrar el máximo de dos números
function maximo(){
    let num1 = document.querySelector("#numero1").value
    let num2 = document.querySelector("#numero2").value
    if (parseFloat(num1) > parseFloat(num2)) {
        alert(num1 + " es el mayor")
    } else {
        alert(num2 + " es el mayor")
    }
}

//Ejercicio4 Calcular el factorial de un número
function calculaFactorial(){
    let numero=parseInt(document.querySelector("#numerofactorial").value)
    if (numero === 0 || numero === 1){
        alert("el factorial de "+ numero + " es " + 1)
        return;
    }
    let resultado = numero;
    for (var i = numero - 1; i >= 1; i--) {
        resultado = resultado * i;
}
alert("el factorial de "+ numero + " es " + resultado)
}

//Ejercicio5 Verificar si un número es primo
function esPrimo(){
    let num = document.querySelector("#numerop").value
    // Si el número es 1 o menor, no es primo
    if (num <= 1){
        alert(num + 
            " No es número primo")
        return;
    }
    // Comprobar si el número es divisible por algún número entre 2 y la raíz cuadrada del número
    for(var i = 2; i <= Math.sqrt(num); i++){
        if (num % i ===0){
            alert(num + " No es número primo")
            return;
        }
    }
    // Si el número no es divisible por ningún número entre 2 y la raíz cuadrada del número, es primo
    alert(num + " Es número primo")
}


//Ejercicio6 Revertir una cadena de texto
    function invertirCadena() {
    let texto = document.querySelector("#palabra").value
    // Convertir un string en un array
    const splitTexto =  [...texto];
  
    // Invertir el orden de un array usando el método reverse()
    const invertirTexto = splitTexto.reverse();
  
    // unir los elementos de un array en una cadena de texto con el método join
    const unirText = invertirTexto.join('');
  
    alert(unirText)
  }

//Ejercicio7 Calcular la suma de los primeros N números naturales
function sumaNumeros(){
    let numero = parseInt(document.querySelector("#numero").value)
    let suma = (numero * (numero + 1))/2;
    alert("La suma es: " + suma);
}
  
//Ejercicio8 Encontrar el elemento más grande en un arreglo
function encontrarMaximo(){
    const cadena = document.querySelector("#arreglo").value
    const arreglo = cadena.split(",");
    const maximo = Math.max(...arreglo)

    alert("El numero mas grande es: " + maximo)
}

//Ejercicio9 Verificar si una palabra es un palíndromo
// split('') lo separa en un array.
// reverse() revierte el arreglo.
// join('') Lo vuelve a convertir en string.
function palindromo() {
    const palabra = document.querySelector("#unaPalabra").value
    const strInvertido = palabra.split("").reverse().join("");
    if (strInvertido === palabra ){
        alert(palabra + " es palíndromo")
    } else{
        alert(palabra + " no es palíndromo")
    }
  }
  
  //Ejercicio10 Generar un número aleatorio en un rango dado.
  function numeroAleatorio(){
    let inferior = parseInt(document.querySelector("#inferior").value)
    let superior = parseInt(document.querySelector("#superior").value)
    let aleatorio = Math.floor(Math.random() * (superior - inferior + 1)) + inferior;
    alert(aleatorio)
  }
