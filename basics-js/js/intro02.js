var amigos = ["Carlos", "Cesar", "Alex", "Manuel"];
amigos[0] = "Arturo"; //Substituye el valor del primer elemento.
amigos[amigos.length] = "Pedro";
amigos.push("Luis", "Juan"); //Agrega elementos al final del array
amigos.pop(); //Elimina el último elemento del array

var amigos2 = ["Antonia", "Maria", "Ana"];

var todosjuntos = amigos.concat(amigos2); //sumamos el segundo array al primero

document.write(todosjuntos[0]+ ", tienes "+ (todosjuntos.length-1) + " amigos: "+todosjuntos.sort().slice(1).join(", "));
