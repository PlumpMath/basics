(function(){

    
    var actualizar = function(){
        var fecha = new Date();
        
        var semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        
        var diaSemana = document.getElementById("diaSemana");
        var dia = document.getElementById("dia");
        var mes = document.getElementById("mes");
        var año = document.getElementById("año");
        var horas = document.getElementById("horas");
        var minutos = document.getElementById("minutos");
        var segundos = document.getElementById("segundos");
        var ampm = document.getElementById("ampm");
        
        diaSemana.textContent = semana[fecha.getDay()];
        dia.textContent = fecha.getDate();
        mes.textContent = meses[fecha.getMonth()];
        año.textContent = fecha.getFullYear();
        
        //horas
        if(fecha.getHours() >= 12){
            horas.textContent = fecha.getHours() - 12;
            ampm.textContent = "PM"
        }else{
            ampm.textContent = "AM"
        };
        
        if(fecha.getHours() == 0){
            horas.textContent == 12;
        };
        
        //minutos
        if(fecha.getMinutes() < 10){
            minutos.textContent = "0" + fecha.getMinutes();
        }else{
            minutos.textContent = fecha.getMinutes();
        };
        
        //segundos
        if(fecha.getSeconds() < 10){
            segundos.textContent = "0" + fecha.getSeconds();
        }else{
            segundos.textContent = fecha.getSeconds();
        };
       
        
    }
    
     setInterval(actualizar, 1000);
    
}())
