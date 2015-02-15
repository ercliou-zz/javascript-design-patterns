function registerCounter () {

	var element = document.getElementById('clicky');
	element.addEventListener('click', function() {
		
		var countElement = document.getElementById('count');
		var count = parseInt(countElement.innerText);
		countElement.innerText = count + 1;

	}, false);
	
}



