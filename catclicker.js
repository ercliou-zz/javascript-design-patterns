var model = function() {
	var catList;
	return {
		
		init: function (){
			catList = [
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
			];
		},
	
		getCatList: function() {
			return catList;
		}
		
		
		
	}
}();

var octopus = function(){
	var selectedCat;
	return {
		init: function(){
			model.init();
			view.init();
		},
		
		getCatList: function() {
			return model.getCatList();
		},
		
		selectCat: function(cat) {
			selectedCat = cat;
			view.displayCat(cat);
			
		},
		
		clickCat: function(cat) {
			var cats = model.getCatList();
			cat.count++;
			view.displayCat(cat);
		}
	
	}
	
	
}();

var view = function(){
	
	function addToList (cat) {

		var catListEl = document.getElementById('cat-list');

		var elem = document.createElement('li');
		

		elem.textContent = cat.name;
		elem.addEventListener('click', (function(cat) {
			
			return function(){
				octopus.selectCat(cat);	
			}
			

		})(cat), false);


		catListEl.appendChild(elem);

	}
	
	
	return {
		init: function(){
			var cats = octopus.getCatList();
			cats.forEach(function(el, i){
				addToList(el);
			});
		
		
		},
		
		
		displayCat: function (cat) {

			var displayEl = document.getElementById('cat-display');

			// clean display
			while (displayEl.firstChild) {
				displayEl.removeChild(displayEl.firstChild);
			}

			var title = document.createElement('h2');
			title.innerText = cat.name;
			displayEl.appendChild(title);
			
			var title = document.createElement('h3');
			title.innerText = cat.count;
			displayEl.appendChild(title);

			
			
			
			var img = document.createElement('img');
			img.setAttribute('src', cat.image);
			
			img.addEventListener('click', (function(cat) {
			
				return function(){
					octopus.clickCat(cat);	
				}
				

			})(cat), false);
			
			displayEl.appendChild(img);

		}
	
	}
	
}();




