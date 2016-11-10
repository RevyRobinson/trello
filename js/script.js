function addList(){
	document.getElementById('añadir-lista').classList.toggle('hidden');
	document.querySelector('.lista').innerHTML = '<input type="text" name="texto-lista" placeholder="Add a Title">';

}