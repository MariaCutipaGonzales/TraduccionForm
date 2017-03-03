function translate(){
	var tittle = document.getElementById("form-signin-heading");
	var email = document.getElementById("inputEmail");
	var password = document.getElementById("inputPassword");
	var button = document.getElementById("btn");
	var remember =document.getElementsByTagName("span")[0];
	//var button =document.getElementsByTagName("btn")[0];

	tittle.innerHTML = "Por favor inicia sesión";
	email.placeholder = "Correo electrónico";
	password.placeholder = "Contraseña";
	remember.innerHTML = "Recordar datos";
	button.innerHTML = "Iniciar sesión";
}
translate();


function mostrar(){
	var email = document.getElementById("inputEmail").value;
	var password = document.getElementById("inputPassword").value;
	var resulta =document.getElementById("result");

     var clase = document.getElementsByClassName("ver").value;

	resulta.innerHTML = clase[0].value;
}