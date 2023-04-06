console.log("Hola Mundo");

var numero = 5;
console.log(numero);

var miVar = "esto es un texto";
console.log(miVar);

var edad = 24;
console.log("mi edad es " + edad); //voncatenar valores

edad = 32 //le dimos otro valor a la variable var 
console.log("mi edad ahora es " + edad);

let miVar2;

const miVar3 = 5; //constante 

var suma = 2 + 2;
console.log("el resultado es = " + suma);

var op1 = 2;
var op2 = 3;
var resultado = op1 + op2;
console.log("El resultado vale: " + resultado)

//condicionales

let miNumero = 6;
if (miNumero == 6) {
    console.log("Sí, mi número vale 6");
} else{
    console.log("No, mi número no es 6");
}

//ahora con pregunta que dara un true
let miNumero2 = 6;

let resultadoPregunta = miNumero2 == 6; 
console.log (resultadoPregunta);

//condicional IF-ELSE
let test = -6;
if(test > 0 ){
    console.log("Mi numero es positivo")
} else if (test == 0) {
    console.log( "mi numero es Cero");
} else {
    console.log("Mi numero es negativo");
}

//Bucles o ciclos LOOPS (while y for)

let i = 0;
while(i < 5) {
    console.log(i);
    i = i + 1;
}

for(let i = 0; i < 10; i = i + 1) {
    console.log( "Hola mundo " );
}

for(let i = 10; i > 0; i = i - 1) {
    console.log( i );
}

 //Funciones , son reutilizables

 function saludar(){
    console.log("hola mundillo")
 }

 saludar(); //asi se llama la funcion 

 function saludar2(nombre, edad){
    console.log("hola mi nombre es " + nombre)
    console.log("y mi edad es " + edad)
 }

 saludar2("Paola" , 32); 

// Funcion que retorna

function multiplicar(num1, num2){
    let resultado = num1 * num2;
    return resultado;
}

let recibir = multiplicar (2, 5);
console.log(recibir);

//Arrays - arreglos

let Arreglo = [ "David", "Paola", "Leo", 15]
//let mostrar = Arreglo[1]
//console.log(mostrar);

for( let i = 0; i < 4; i++ ){
    console.log("Accediendo al indice: " + i)
    let mostrar = Arreglo[i];
    console.log(mostrar);
}

//Objetos
let persona = {
    nombre : "Paola",
    edad: 32,
    femenino: true,
};

let persona2 = {
    nombre : "Karen",
    edad: 33,
    femenino: true,
};

console.log(persona)
console.log(persona2.nombre)

//Array de objetos

let arregloObj = [persona, persona2]

// 








