

let edad = prompt("Cuantos años tenes?");

if (edad < 18) {
    alert("Por favor recorra el sitio con responsabilidad");
  } else {
    alert("Bienvenidx a nuestro local!");
  };

    //si ya hay respuesta no volver a preguntar, de lo contrario preguntar hasta que haya respuesta
  if( !localStorage.getItem(edad) ){

    alert.style.display= 'block';
    localStorage.setItem(edad,1); 

} else {
    alert.style.display= 'none';
}



// consultar antes de cerrar la pagnia si quiere salir del sitio
 //window.confirm(message);
    //if (window.confirm("Seguro queres retirarte?")) {
    //window.open("exit.html", "Muchas gracias por pasar!");
    //};


