//Creación, transformación y eliminación de nodos con javascript
//Pasos:
//1. Crear el elemento
var elemento = document.createElement("h2");
//2. Crear un nodo de texto
var contenido = document.createTextNode("Este es nuestro titular");
//3. Añadir el nodo de texto al elemento
elemento.appendChild(contenido);
//4. Agregar atributos al elemento
elemento.setAttribute("align", "center");
//5. Agregar el elemento al documento
document.getElementById("subtitulo").appendChild(elemento);

var nuevoElemento = document.createElement("li"), //Separado por una coma para no tener que repetir var
    nuevoContenido = document.createTextNode("Nuevo texto");
nuevoElemento.appendChild(nuevoContenido);
var padre = document.getElementById("lista");
//Otra forma de acceder al elemento padre si por ejemplo, no fuera accesible a través de una id:
//var padre = document.getElementsByTagName("li")[0].parentNode;

padre.appendChild(nuevoElemento);

//Otra forma de agregar un nodo: insertBefore
var nuevoElemento2 = document.createElement("li"),
    nuevoContenido2 = document.createTextNode("Nuevo primer elemento");
nuevoElemento2.appendChild(nuevoContenido2);
var primerElemento = document.getElementsByTagName("li")[0];
padre.insertBefore(nuevoElemento2, primerElemento);

//Cambiar el contenido de un elemento
var n01 = document.getElementById("segundo");
n01.innerHTML = "Texto <i class=\"foo\">cambiado</i>";
//n01.textContent= "Texto cambiado"; Con esto se accede al texto pero sin formato HTML

//Sustituir un elemento replaceChild
var nuevoElemento3 = document.createElement("li"),
    nuevoContenido3 = document.createTextNode("Elemento <li> substituido");
nuevoElemento3.appendChild(nuevoContenido3);
padre.replaceChild(nuevoElemento3, document.getElementsByTagName("li")[1]);

//Eliminar elementos; removeChild
padre.removeChild(document.getElementsByTagName("li")[4]);



