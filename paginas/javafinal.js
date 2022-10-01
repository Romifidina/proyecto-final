

//let edad = localStorage.getItem('edad');
//if(!edad){
    //edad = prompt("Cuantos años tenes?");
    //localStorage.setItem('edad', edad);
//}
//let alert = localStorage.getItem('alert');
//if(!alert){
     //if (edad < 18) {
      //alert("Por favor recorra el sitio con responsabilidad");
    //} else {
      //alert("Bienvenidx a nuestro local!");
    //};
	//alert = true;
    //localStorage.setItem('alert', alert);
//}
let popUp = localStorage.getItem('respuesta');

if (!popUp) {
  respuesta = prompt('Cuantos años tenes?');

  if (respuesta < 18) {
    alert('Por favor recorra el sitio con responsabilidad');
  } else {
    alert('Bienvenidx a nuestro local!');
  }

  localStorage.setItem('respuesta', respuesta);
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

