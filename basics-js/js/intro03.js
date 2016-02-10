var nombre = "Espe",
    edad = 39;

if(edad >= 18 && nombre == "Espe"){
    document.write("Hola "+ nombre+ ", eres mayor de edad.");
}else if(edad >= 18 && nombre != "Espe"){
    document.write("Hola "+nombre+", eres mayor de edad y no eres Espe.");
}else{
    document.write("Hola, no eres mayor de edad.");
}

if(edad === "39"){
    document.write("Hola, la edad es un string.");
}else{
    document.write("Hola, la edad no es un string.");
}