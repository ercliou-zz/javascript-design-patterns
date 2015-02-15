function registerCounter () {

	var firstCat = {
		name: 'Grumpy',
		element: document.getElementById('first-cat')
	};
	
	var secondCat = {
		name: 'Cute-cute',
		element: document.getElementById('second-cat')
	};

	registerCat(firstCat);
	registerCat(secondCat);

}

function registerCat (cat) {

	var clicky = cat.element.getElementsByClassName('clicky')[0];

	var nameEl = cat.element.getElementsByClassName('name')[0];
	nameEl.innerText = cat.name;
	
	clicky.addEventListener('click', function() {
		
		var countElement = cat.element.getElementsByClassName('count')[0];
		var count = parseInt(countElement.innerText);
		countElement.innerText = count + 1;

	}, false);

}

