
var catList = [
	{
		name: 'Grumpy',
		image: 'grumpy.jpg',
		count: 0
	},
	{
		name: 'Cute-cute',
		image: 'cute.jpg',
		count: 0
	},
	{
		name: 'Cups',
		image: 'cups.jpg',
		count: 0
	}
]


function registerCounter () {

	catList.forEach(function(el, i){
		addToList(el);
	});

}

function displayCat (cat) {

	var displayEl = document.getElementById('cat-display');

	// clean display
	while (displayEl.firstChild) {
    	displayEl.removeChild(displayEl.firstChild);
	}

	var title = document.createElement('h2');
	title.innerText = cat.name;
	displayEl.appendChild(title);

	var img = document.createElement('img');
	img.setAttribute('src', cat.image);
	displayEl.appendChild(img);

}

function addToList (cat) {

	var catListEl = document.getElementById('cat-list');

	var elem = document.createElement('li');
	

	elem.textContent = cat.name;
	elem.addEventListener('click', (function(cat) {
		
		return function(){
			displayCat(cat);	
		}
		

	})(cat), false);


	catListEl.appendChild(elem);

}

