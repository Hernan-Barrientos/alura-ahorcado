let campoInput = document.getElementById("inputAgregar");

function agregarPalabra(){

    
    if(!palabras.includes(campoInput.value.toUpperCase()) && !campoInput.value==""){
        palabras.push(campoInput.value.toUpperCase());
        ejecutaAlerta();
    }
    
}


function ejecutaAlerta() {   
    console.log("palabra agregada");
    document.getElementById("palabraAdd").style.opacity="100%";
    setTimeout(function(){document.getElementById("palabraAdd").style.opacity="0%"}, 2000 );
    }