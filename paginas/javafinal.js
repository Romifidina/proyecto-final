
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
let localidad = document.getElementsByClassName('envio')
function envio(){
    if (localidad == 2900){
      alert('Su envio es gratuito con su compra de mas de $1000');
    } else{
      alert('Su envio tiene un costo de $1000');
    };
};



// consultar antes de cerrar la pagnia si quiere salir del sitio
function salir(){
  let respu = window.confirm("Seguro deseas enviar este mensaje");
  if ( respu == true) {
  alert('Contestaremos a la brevedad');
  document.getElementById('form').submit();
 };
}