//Acceso a los atributos del DOM

var elemento = document.createElement("div"); //Creo un elemento nuevo
elemento.setAttribute("class", "azul"); //Le aplico la clase .azul
//var padre = document.getElementsByTagName("section");
//padre[0].appendChild(elemento); //padre es un array, aunque sólo tiene un elemento en este caso, porque sólo hay una section, y tengo que indicar a qué elemento de ese array le añado un Child

var padre = document.getElementById("contenedor"); //En este caso no obtengo un array de elementos, sino que obtengo directamente lo que busco
padre.appendChild(elemento); 

//vamos a cambiarle los atributos

elemento.setAttribute("class", "rojo");

//Podemos hacer el cambio de otra forma

elemento.id = "nuevaID"; //Le hemos añadido una id al elemento
elemento.className = "azul"; //accedemos a la clase del elemento y la cambiamos de nuevo

//También podemos cambiar el atributo href de un enlace por ejemplo
document.getElementById("enlace").href = "http://www.mi-mina.com";







