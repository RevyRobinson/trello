function addList(){
	document.getElementById('add-list').classList.toggle('hidden');
	//crear el div donde iran el input y el boton
	var cajaDiv = '<div id="caja-input" class="lista"></div>';
	//meter este div en el html
	document.querySelector('body').innerHTML += cajaDiv;
	//poner la caja de texto y el boton
	document.querySelector('.lista').innerHTML = '<input id="nombre-titulo" type="text" name="texto-lista" placeholder="Add a Title">';
	document.querySelector('.lista').innerHTML += '<button onclick="saveTitle()">Guardar</button>';
}

function saveTitle(){
	//tomar el value
	var tituloLista = document.getElementById('nombre-titulo').value;
	if (tituloLista.length == 0){
		alert('Debes escribir un tìtulo!');
	} else {
	//que desaparezca el input
	document.getElementById('caja-input').classList.toggle('hidden');
	//crear div 
	var cajaDiv = '<div class="caja-titulo"></div>';
	var cajaBoton = '<div class="caja-boton"></div>';
	//meter este div en el html
	document.querySelector('body').innerHTML += cajaDiv;
	document.querySelector('body').innerHTML += cajaBoton;
	//meter en el div el value
	document.querySelector('.caja-titulo').innerHTML = tituloLista;
	//Que aparezca un boton de añadir tarjeta
	document.querySelector('.caja-boton').innerHTML += '<button onclick="FUNCTION NUEVA">Añadir Tarjeta</button>';
	}
}