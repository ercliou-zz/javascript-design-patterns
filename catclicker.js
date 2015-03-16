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
	
	
	return {
		init: function(){
			
			this.selectedCat;
			this.doShowAdmin = false;
			this.adminPanel = document.getElementById('admin-panel');
			
			model.init();
			view.init();
			adminView.init();
		},
		
		getCatList: function() {
			return model.getCatList();
		},
		
		selectCat: function(cat) {
			this.selectedCat = cat;
			view.displayCat();
			
		},
		
		getSelectedCat: function(){
			return this.selectedCat;
		},
		
		clickCat: function(cat) {
			this.selectedCat.count++;
			view.displayCat();
		},
		
		showAdmin: function() {
			this.doShowAdmin = true;
			adminView.showAdmin();
		},
		
		hideAdmin: function() {
			this.doShowAdmin = false;
			adminView.hideAdmin();
		},
		
		isAdminShown: function() {
			return this.doShowAdmin;
		},
		
		toggleAdmin: function() {
			if(octopus.isAdminShown()){
				octopus.hideAdmin();
			} else {
				octopus.showAdmin();
				
			}
		},
		
		save: function() {
			this.selectedCat.name = document.getElementById('name').value;
			this.selectedCat.image = document.getElementById('image-url').value;
			this.selectedCat.count = document.getElementById('clicks').value;
			
			adminView.hideAdmin();
			view.displayCat();
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
		
		displayCat: function () {
			var cat = octopus.getSelectedCat();
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

var adminView = function(){
	

	return {
		init: function(){
			this.adminPanel = document.getElementById('admin-panel');
			this.adminBtn = document.getElementById('admin-btn');
			this.saveBtn = document.getElementById('save-btn');
			this.cancelBtn = document.getElementById('cancel-btn');
			
			this.nameElm = document.getElementById('name');
			this.imageUrlElm = document.getElementById('image-url');
			this.clicksElm = document.getElementById('clicks');
		
		
			octopus.hideAdmin();
			this.adminBtn.onclick = function(){
				octopus.toggleAdmin();
			};
			this.saveBtn.onclick = function(){
				octopus.save();
				octopus.hideAdmin();
			};
			this.cancelBtn.onclick = function(){
				octopus.hideAdmin();
				//nameElm.value =
			};
			
		},
		
		showAdmin: function() {
			this.adminPanel.style.visibility = 'visible';
			var selectedCat = octopus.getSelectedCat();
			this.nameElm.value = selectedCat.name;
			this.imageUrlElm.value = selectedCat.image;
			this.clicksElm.value = selectedCat.count;
			
		},
		
		hideAdmin: function() {
			this.adminPanel.style.visibility = 'hidden';
		},
		
		
		
	};
}();




