// Esto es un comentario
var nombre;
var edad;
nombre = prompt("Ingresa tu nombre");
edad = 2 * prompt("Ingresa tu edad");


document.write("Hola "+nombre+". ¿Tienes "+edad+" años?"); //Para imprimir en pantalla
console.log(nombre); //Para imprimir datos en consola
   
//Tipos de datos
//Numérico. No hace falta especificar si es integer, float, etc...
var age = 19;
var sumaedad01 = 20 + edad;
var sumaedad02 = "20" + edad;
document.write(sumaedad01);
document.write(sumaedad02);

//String
var text = "Para añadir \"Comillas\" en el texto"
//La barra invertida se usa para escapar el carácter que precede. También se podría haber hecho con comillas simples: 'para añadir "Comillas" dentro de las comillas del string'
document.write(text);

//Arrays
//Conjunto de elementos. Una var que puede almacenar muchos elementos, que no tienen porqué ser del mismo tipo.
var amigos = ["Carlos", "Pepe", "Jose", 19, true];
document.write(amigos[0]);

//Objetos
//Similares a los Arrays. Con llaves en vez de corchetes
var miobjeto = {
    color: "Black",
    size: 12
};

//Booleans
//true y false
var booleano = true;

//Undefined
var algo;
//Si intentamos acceder a algo, nos dirá que está indefinida.

//Null

//NaN. Valor inválido





