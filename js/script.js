function addList(){
	document.getElementById('add-list').classList.toggle('hidden');
	//crear el div donde iran el input y el boton
	var cajaDiv = '<div id="caja-input" class="lista"></div><br>';
	//meter este div en el html
	document.querySelector('body').innerHTML += cajaDiv;
	//poner la caja de texto y el boton
	document.querySelector('.lista').innerHTML = '<input id="nombre-titulo" type="text" name="texto-lista" placeholder="Add a Title"><br>';
	document.querySelector('.lista').innerHTML += '<button onclick="saveTitle()">Guardar</button>';

}

function saveTitle(){
	//tomar el value
	var tituloLista = document.getElementById('nombre-titulo').value;
	if (tituloLista.length == 0){
		alert('Debes escribir un título!');
	} else {
	//que desaparezca el input
	document.getElementById('caja-input').classList.toggle('hidden');
	//crear div 
	var cajaDiv = '<div id="title-box" class="caja-titulo"></div><br>';
	var cajaBoton = '<div id="box-button" class="caja-boton"></div></br>';
	//meter este div en el html
	document.querySelector('body').innerHTML += cajaDiv;
	document.querySelector('body').innerHTML += cajaBoton;
	//meter en el div el value
	document.querySelector('.caja-titulo').innerHTML = tituloLista;
	//Que aparezca un boton de añadir tarjeta
	document.querySelector('.caja-boton').innerHTML += '<button onclick="FUNCTION NUEVA">Añadir Tarjeta</button>';
	}

	//VERSION 0.3
	(function addNewList(){
		//quitar las clases a los elementos para "reiniciarlos"
		document.getElementById('title-box').classList.remove('caja-titulo');
		document.getElementById('box-button').classList.remove('caja-boton');
		document.getElementById('initial').classList.remove('div-inicial');
		//poner las nuevas clases para llamar a las cajas viejas
		document.getElementById('title-box').classList.add('caja-titulo-done');
		document.getElementById('box-button').classList.add('caja-boton-done');
		document.getElementById('initial').classList.add('div-inicial-done');

		//setear el boton inicial en un div junto a la caja 
		//crear un div con clase div-inicial
		var divInicial = '<div id="initial" class="div-inicial"><button class="boton-add" id="add-list" onclick="addList()">Add List</button></div>';
		//meter el div en el html
		document.querySelector('body').innerHTML += divInicial;	

})()
}



