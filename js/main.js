function translate(){
	var tittle = document.getElementById("form-signin-heading");
	var email = document.getElementById("inputEmail");
	var password = document.getElementById("inputPassword");
	var remember =document.getElementsByTagName('span')[0];
	var button = document.getElementsByClassName('btn')[0];

	tittle.innerHTML = "Por favor inicia sesión";
	email.placeholder = "Correo electrónico";
	password.placeholder = "Contraseña";
	button.innerHTML = "Iniciar sesión";
	remember.innerHTML = "Recordar datos";
	
}
translate();


function mostrar(){
  var clase = document.getElementsByClassName('form-control');
  var result =document.getElementById('result');
  result.setAttribute('style','font-size: 20px; cursor: pointer; text-align:center;'); //centrar el div
  result.innerHTML = "<h3>"+"Datos de formulario"+"</h3>"+"<br>"+
    					"El correo electrónico ingresado es:"+"<br>"+
    					clase[0].value+"<br>"+
    					"La contraseña ingresada es:"+"<br>"+
    					clase[1].value;
 }
