var numero = 3;
var dias = ["Lunes", "Martes", "Miércoles", "Jueves"]

for(i = 1; i<=numero ; i++ ){
    //Instrucciones
    document.write("Hola "+i+"! ");
}

document.write("<br>");

for(i=0; i<dias.length; i++){
    document.write("Hoy es "+dias[i]+"<br>")
}

//while es parecido a for. Las variables en while están fuera
var numDias = 0;
while(numDias < dias.length){
    document.write(dias[numDias] + "<br>");
    numDias++; //Si no añadimos esta línea, i siempre va a ser menor que 10 y vamos a entrar en un loop infinito
}

//do{}while() es parecido pero siempre se ejecuta al menos una vez independientemente de que se cumpla la condición dentro del while.
//do{
//    //Siempre se ejecuta al menos una vez
//}while(condición);

function saludo(){
    document.write("Buenos días <br>");   
}
saludo(); //La función no hace nada hasta que no la llamamos. Esta es una función sin parámetros.

function hola(name){
    document.write("Hola, "+name+"<br>");   
}
hola("Espe"); //Esta es una función con parámetros

//En este caso almacenamos la función dentro de una variable que se llama suma
var suma = function (num1, num2){
    var a = num1; //variables locales
    var b = num2;
    return num1+num2; //las funciones devuelven valores
} 

document.write(suma(5, 5));

//Se pueden llamar funciones dentro de otras funciones.
// Una función no debe hacer más de una cosa.

var max= function (valor1, valor2){
    if(valor1>valor2){
        return valor1;
    }else{
        return valor2;
    }   
}

//A veces también puede encontrarse así escrito:
//var max= function (valor1, valor2){
//    if(valor1>valor2){
//        return valor1;
//    }
//        return valor2;  
//}

//Variables globales: se puede acceder a ellas desde cualquier parte del código
//Variables locales: Se puede acceder a ellas desde la función en la que está definida o desde una función anidada en ella.
//Si las variables se definen sin la palabra reservada var, son variables globales aunque estén definidas dentro de una función. No es muy recomendable hacerlo así.

var miFuncion = function(){
    var variableLocal = "Esta es local";
    
    var funcionLocal = function(){
        var variableLocal = "Esta es local anidada";
        alert(variableLocal);
        //Aunque hay dos variables locales llamadas igual, el Scope de js funciona por niveles, va a buscar la más cercana.
    }
    funcionLocal();
}
miFuncion();

//Función autoinvocada

(function(){
    var var1 = "var dentro de función autoinvocada";
    alert(var1);
}())





















