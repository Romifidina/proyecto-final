
//preguntar la edad al entrar a la pagina
let popUp = localStorage.getItem('respuesta');

if (!popUp) {
  respuesta = prompt('Cuantos años tenes?');

  if (respuesta < 18) {
    alert('Por favor recorra el sitio con responsabilidad');
  } else {
    alert('Bienvenidx a nuestro local!');
  }

  localStorage.setItem('respuesta', respuesta);
};


//crear una funcion de envio
funcion('envio'){
  document.getElementsByClassName('envio')
    if (localidad == 2900){
      document.getElementById('envio').innerHTML = 'Su envio es gratuito con su compra de mas de $1000'
    } else{
      document.getElementById('envio').innerHTML = 'Su envio tiene un costo de $1000'
    }
}


// consultar antes de cerrar la pagnia si quiere salir del sitio
// window.confirm(message);
   // if (window.confirm("Seguro queres retirarte?")) {
    //window.open("exit.html", "Muchas gracias por pasar!");
    //};
  //si ya hay respuesta no volver a preguntar, de lo contrario preguntar hasta que haya respuesta
 // if( !localStorage.getItem(edad) ){

    //document.getElementById('mensaje').style.display= 'block';
    //localStorage.setItem(edad,1); 

//}else {
    //document.getElementById('mensaje').style.display= 'none';
//}

