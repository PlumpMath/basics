var texto = "Esperanza Moreno";
var t01 = texto.length;
var t02 = texto.substring(10, 15); //Corta la cadena de texto desde la posición 3.
var t03 = texto.indexOf("e"); //Nos da la posición de la primera 3 minuscula
var t04 = texto.indexOf("e", t03+1); //Nos da la posición de la segunda 3 minuscula, ya que empieza a buscar a partir del siguiente carácter después de la primera
var t05 = texto.lastIndexOf("o"); //Nos da la posición de la última letra "o"
var t06 = texto.replace(texto, "Hemos reemplazado el texto");
var t07 = texto.replace("Moreno", ", hemos reemplazado parte del texto");


document.write(t01+"<br>"+t02+"<br>"+t03+"<br>"+t04+"<br>"+t05+"<br>"+t06+"<br>"+t07+"<br>");




