//Timers e intervals. Nos permiten ejecutar código cada cierto tiempo con js.

(function(){
    var contador = 0;
    
    //Timeout. Ejecuta una función una vez que el tiempo que hayamos especificado se acabe.
    var saludo = function(){
        contador++;
        console.log("contando... "+contador);
        if(contador === 5){
            clearInterval(intervalo);
        }
    };
    
    //Especificamos la función a ejecutar y el tiempo que queremos que pase en milisegundos
    //setTimeout(saludo, 2000);
    
    //Interval
    var intervalo = setInterval(saludo, 1000);
    
}())

//Fechas
(function(){
    var fecha = new Date(); //Creamos un nuevo objeto de tipo Date. Si dejamos los paréntesis en blanco, nos da la fecha actual
    document.write(fecha.getHours()+":");
    document.write(fecha.getMinutes());
        
}())
