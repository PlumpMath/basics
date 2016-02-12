//DOM Document Object Model. es la estructura de nuestro elemento. Está conformado por nodos. Los dos elementos primarios son head y body. Dentro de head tenemos meta, title, etc. En Body tenemos h1, h2, p, div. etc...

var elementosP = document.getElementsByTagName("p"); //El resultado de esto es una HTMLCollection, con tres elementos (los tres párrafos). Podemos acceder a ellos como lo haríamos para acceder a un array.

elementosP[0]; //Con esto accedemos al primer párrafo
 
//para acceder al contenido del párrafo, usamos innerHTML. Nos muestra el contenido incluyendo las etiquetas html.
elementosP[0].innerHTML;

elementosP[0].innerHTML = "Cambio de texto"; //De esta forma sustituimos el contenido del párrafo

//Otra forma de acceder a los elementos, la más usual, es usando los id

var segundoParrafo = document.getElementById("segundo");
segundoParrafo.innerHTML = "Cambio de párrafo accediendo por id";

//Regla general: usar las class para trabajar con CSS y las id para js.