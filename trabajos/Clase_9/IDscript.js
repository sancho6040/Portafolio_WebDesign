var w = window.innerWidth;
var h = window.innerHeight;

var x = document.getElementById("prueba");
x.innerHTML = "anccho del navegador: "+ w +"<br> alto del navegador: "+ h ;

document.getElementById("pix").innerHTML = "reolucion de pantalla: " + screen.width + "<br>" +"profundidad de color: "+ screen.colorDepth;

document.getElementById("cook").innerHTML = "navigator.cookieEnabled esta habilitado?: " + navigator.cookieEnabled;