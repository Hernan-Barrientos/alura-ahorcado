
  const abecedario = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  let palabras = ["BRASIL","URUGUAY","CHILE","PARAGUAY","ARGENTINA",
  "BOLIVIA","PERU","COLOMBIA","VENEZUELA","ECUADOR"];

  let multiplicador= palabras.length;
  let numero= Math.round(Math.random()*multiplicador);  
  let secretWord = palabras[numero];
  console.log(secretWord);

  let contador = 1;

function newGame(){



  limpiarTableros('mainContainer');

  crearHorca("mainContainer");
   crearContenedorCajitas();
   botonVolver();


   longitud=secretWord.length;

  for(i=1;i<=longitud;i++){
    crearCasilleros();
    let casilleroIndividial=document.getElementById("cajitaLetras"+contador);
    casilleroIndividial.textContent=secretWord.substring(contador-1, contador);
    casilleroIndividial.style.color="transparent";

    contador++;

  }
  
}

let contadorBis=0;
let contadorPerdedor=0;


window.onload = function(){ //esto hace que la funcion inicie cuando la pagina este totalmente cargada
document.onkeypress = teclas; //esto inicia la funcion teclas() y le pasa el evento como parametro
  }

let teclasYaTocadas = [];
let letrasIncorrectas = [];
// 
//-----comienzo de la funcion teclas
//
    function teclas(event){
      //muestra en consola la tecla tocada //console.log(String.fromCharCode(event.charCode).toUpperCase()); //crea un caracter a partir del char code ingresado en el evento
      
      verificarLetra = String.fromCharCode(event.charCode).toUpperCase();

      
      if(!abecedario.includes(verificarLetra)){console.log(verificarLetra+" no es letra");}

      if(abecedario.includes(verificarLetra)){console.log(verificarLetra+"...");

      teclaTocada = String.fromCharCode(event.charCode).toUpperCase();
     


        if(contadorPerdedor<6){ 

      if(!teclasYaTocadas.includes(teclaTocada)){

        for(c=1;c<=secretWord.length;c++){
                  elementoID= "cajitaLetras"+c;
                  letrita=document.getElementById(elementoID);

                    if(letrita.textContent.includes(teclaTocada)){ //esta parte revisa si la letra dentro del casillero coincide con la tecla tocada
                    document.getElementById(elementoID).style.color="";//en caso de coincidir le saca el color="transparent"
                    contadorBis++;//agregar logica para que el contadorBis no se sume si la letra ya esta repetida
                  }
                }
                                              }


      if(contadorBis==secretWord.length){
                cartelGanador = document.getElementById("mainContainer");
                elementoGanador = document.createElement("div");
                elementoGanador.id="divGanador";
                elementoGanador.className="divGanadorClass";
                elementoGanador.textContent="GANASTE!!";
                cartelGanador.append(elementoGanador);
              if(document.getElementById("playAgain")==null){buttonPlayAgain("divGanador");}
                
                

                                              }

              }

      if(teclasYaTocadas.includes(teclaTocada)==false){ //esto revisa el array teclasYaTocadas y, en caso de no incluir la tecla tocada, la añade.
                teclasYaTocadas.push(teclaTocada);
              }
          if(contadorBis<secretWord.length){   
                if(!secretWord.includes(teclaTocada) && !letrasIncorrectas.includes(teclaTocada)){
                  contadorPerdedor++;
                  letrasIncorrectas.push(teclaTocada);
                  mostrarEquivocadas = document.createElement("div");
                  mostrarEquivocadas.className="mostrarEquivocadas";
                  mostrarEquivocadas.id="mostrarEquivocadas";
                  mostrarEquivocadas.textContent="letras incorrectas ingresadas: "+letrasIncorrectas;
                  document.getElementById("mainContainer").prepend(mostrarEquivocadas);


                            //seccion de if's para agregar partes del cuerpo a medida q aumenta el contadorPerdedor
                            if(contadorPerdedor>=1){
                              let lienzo = document.getElementById("lienzo");
                              document.getElementById("mainContainer").prepend(lienzo);
                              lienzo.className="lienzo"
                              lienzo.id="lienzo"
                              var pincel = lienzo.getContext("2d");
                              //cabeza}
                              pincel.fillStyle = "darkblue";
                              pincel.beginPath();
                              pincel.arc(455,75,25,0,2*3.14);
                              pincel.fill();
                              pincel.fillStyle = '#F3F5FC';
                              pincel.beginPath();
                              pincel.arc(455,75,15,0,2*3.14);
                              pincel.fill();
                              document.getElementById('lienzo').prepend(pincel);}

                              if(contadorPerdedor>=2){
                                let lienzo = document.getElementById("lienzo");
                                document.getElementById("mainContainer").prepend(lienzo);
                                var pincel = lienzo.getContext("2d");
                                //cuerpo
                                pincel.fillStyle = "darkblue";
                                pincel.fillRect(450,100,10,100);                          
                              }
                              if(contadorPerdedor>=3){
                                let lienzo = document.getElementById("lienzo");
                                document.getElementById("mainContainer").prepend(lienzo);
                                var pincel = lienzo.getContext("2d");
                                //brazo izquierdo
                                pincel.fillStyle = "darkblue"; 
                                pincel.beginPath();
                                pincel.moveTo(450,120);
                                pincel.lineTo(450,110);
                                pincel.lineTo(400,140);
                                pincel.lineTo(400,150);
                                pincel.fill();
                              }
                              if(contadorPerdedor>=4){
                                let lienzo = document.getElementById("lienzo");
                                document.getElementById("mainContainer").prepend(lienzo);
                                var pincel = lienzo.getContext("2d");
                                //brazo derecho
                                pincel.fillStyle = "darkblue"; 
                                pincel.beginPath();
                                pincel.moveTo(460,120);
                                pincel.lineTo(460,110);
                                pincel.lineTo(500,140);
                                pincel.lineTo(500,150);
                                pincel.fill();
                              }
                              if(contadorPerdedor>=5){
                                let lienzo = document.getElementById("lienzo");
                                document.getElementById("mainContainer").prepend(lienzo);
                                var pincel = lienzo.getContext("2d");
                                //pierna izquierda
                                pincel.fillStyle = "darkblue"; 
                                pincel.beginPath();
                                pincel.moveTo(455,200);
                                pincel.lineTo(450,190);
                                pincel.lineTo(400,230);
                                pincel.lineTo(400,240);
                                pincel.fill();
                              }
                              if(contadorPerdedor==6){
                                let lienzo = document.getElementById("lienzo");
                                document.getElementById("mainContainer").prepend(lienzo);
                                var pincel = lienzo.getContext("2d");
                                //pierna derecha
                                pincel.fillStyle = "darkblue"; 
                                pincel.beginPath();
                                pincel.moveTo(455,200);
                                pincel.lineTo(460,190);
                                pincel.lineTo(500,230);
                                pincel.lineTo(500,240);
                                pincel.fill();
                              }

                            //fin de seccion de if's

                    if(contadorPerdedor==6){
                      cartelPerdedor = document.getElementById("mainContainer");
                      elementoPerdedor = document.createElement("div");
                      elementoPerdedor.id="divGanador";
                      elementoPerdedor.className="divGanadorClass";
                      elementoPerdedor.textContent="PERDISTE!!";
                      cartelPerdedor.append(elementoPerdedor);
                      buttonPlayAgain("divGanador");
                      }
                      console.log("la cifra de contadorPerdedor es: "+contadorPerdedor+" el jugador pierde si el contador llega a 6");

                 }
                } }
               }


// 
//-----fin de la funcion teclas
//


     
function botonVolver(){
  btnVolver=document.createElement("button");
    btnVolver.id="botonBack";
    btnVolver.className="botonBack";
    btnVolver.type="button";
    btnVolver.textContent="volver al inicio";

  enlaceVolver=document.createElement("a");
  enlaceVolver.href="./index.html"; //va 2 solo punto parece
  enlaceVolver.append(btnVolver);

  document.getElementById("mainContainer").append(enlaceVolver);

}

function buttonPlayAgain(contenedorBoton){
  botonJugarDeNuevo= document.createElement("button");
  botonJugarDeNuevo.type="button";
  botonJugarDeNuevo.id="playAgain";
  botonJugarDeNuevo.className="playAgain";
  botonJugarDeNuevo.textContent="jugar otra vez";
  botonJugarDeNuevo.onclick=newGameAndSettAgain;
  document.getElementById(contenedorBoton).append(botonJugarDeNuevo);
  letrasIncorrectas = [];
}

function newGameAndSettAgain(){
  teclasYaTocadas = [];
  contador=1;
  contadorBis=0;
  contadorPerdedor=0;
  //stopButton=0;
  numero= Math.round(Math.random()*10);  
  secretWord = palabras[numero];
  console.log(secretWord);

  newGame();

}

function crearCasilleros(){
  cajita=document.createElement("div");
  cajita.className="cajitaLetras";
  cajita.id="cajitaLetras"+contador;
  document.getElementById("cajaDeCajitas").append(cajita); //.append añade los childs en orden, crea uno y luego el siguiente, .preppend crea cada elemento y lo empuja hacia abajo para agregar uno nuevo.
  return(cajita);

  }


function crearElemento(etiqueta, classEtiqueta, idEtiqueta, textoContenido, contenedorPrincipal, $elementoInterno,fuente){
    $elementoInterno = document.createElement(etiqueta);
    $elementoInterno.className = classEtiqueta;
    $elementoInterno.id = idEtiqueta;
    $elementoInterno.value = textoContenido;
    $elementoInterno.textContent = textoContenido;
    $elementoInterno.src=fuente;
    document.getElementById(contenedorPrincipal).prepend($elementoInterno);


}

function crearElementoSeleccionable(etiqueta, classTag, idTag, contenedorPrincipal, atributo, valorAtributo){
  elementoInterno = document.createElement(etiqueta);
  elementoInterno.className = classTag;   
  elementoInterno.id = idTag;
     
  if(atributo && valorAtributo){elementoInterno.setAttribute(atributo, valorAtributo);}
 
  document.getElementById(contenedorPrincipal).prepend(elementoInterno);
  return elementoInterno;
}



function limpiarTableros(containerId){
const testeo = document.getElementById(containerId);
while (testeo.childElementCount!==0) {
      testeo.removeChild(testeo.firstElementChild);
    }
    
}



function crearHorca(contenedor){
  let lienzo = document.createElement("canvas");
		lienzo.width="600";
		lienzo.height="400";
    lienzo.className="lienzo"
    lienzo.id="lienzo"
		document.getElementById(contenedor).prepend(lienzo);
    document.querySelector("canvas");
		var pincel = lienzo.getContext("2d");
      //inicio de estructura de la horca
			pincel.fillStyle = "darkblue";//soporte horizontal superior
			pincel.fillRect(300,0,160,10);

      pincel.fillStyle = "darkblue"; //soporte diagonal
      pincel.beginPath();
      pincel.moveTo(385,10);
      pincel.lineTo(375,10);
      pincel.lineTo(300,120);
      pincel.lineTo(305,130);
      pincel.fill();
      
			pincel.fillStyle = "darkblue";//soga
			pincel.fillRect(450,10,10,40);
  		pincel.fillStyle = "darkblue";//poste
			pincel.fillRect(300,0,10,340);
			pincel.fillStyle = "darkblue";//base
			pincel.fillRect(200,340,370,10);
      //fin de estructura de la horca
      
      /*//cabeza
      pincel.fillStyle = "darkblue";
      pincel.beginPath();
      pincel.arc(455,75,25,0,2*3.14);
      pincel.fill();
      pincel.fillStyle = '#F3F5FC';
      pincel.beginPath();
      pincel.arc(455,75,15,0,2*3.14);
      pincel.fill();
      document.getElementById('mainContainer').prepend(lienzo);
      //cuerpo
      pincel.fillStyle = "darkblue";
			pincel.fillRect(450,100,10,100);
      //brazo izquierdo
      pincel.fillStyle = "darkblue"; 
      pincel.beginPath();
      pincel.moveTo(450,120);
      pincel.lineTo(450,110);
      pincel.lineTo(400,140);
      pincel.lineTo(400,150);
      pincel.fill();
      //brazo derecho
      pincel.fillStyle = "darkblue"; 
      pincel.beginPath();
      pincel.moveTo(460,120);
      pincel.lineTo(460,110);
      pincel.lineTo(500,140);
      pincel.lineTo(500,150);
      pincel.fill();
      //pierna izquierda
            pincel.fillStyle = "darkblue"; 
      pincel.beginPath();
      pincel.moveTo(455,200);
      pincel.lineTo(450,190);
      pincel.lineTo(400,230);
      pincel.lineTo(400,240);
      pincel.fill();
      //pierna derecha
      pincel.fillStyle = "darkblue"; 
      pincel.beginPath();
      pincel.moveTo(455,200);
      pincel.lineTo(460,190);
      pincel.lineTo(500,230);
      pincel.lineTo(500,240);
      pincel.fill();*/
}
function crearContenedorCajitas(){
cajaDeCajitas=document.createElement("section");
cajaDeCajitas.id="cajaDeCajitas";
cajaDeCajitas.className="cajaDeCajitas"
document.getElementById("mainContainer").prepend(cajaDeCajitas);
return(cajaDeCajitas);
}



var cadena = secretWord;


