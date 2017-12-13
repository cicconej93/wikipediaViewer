var wiki = document.querySelector(".wikis");



document.addEventListener('keydown', function(event) {

	if (event.key === "Enter") {
		wiki.innerHTML = '';
		var search = document.getElementById('search').value;
		//console.log(search);
		var json = new XMLHttpRequest();

		json.open('GET', 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+search+'&limit=10&format=json&origin=*');


		json.onload = function() {
			
			var data = JSON.parse(json.responseText);
			

			if(data[1][0] === undefined){
				wiki.innerHTML = '<div class="entry"><h3>No Results</h3></div>';
			} else {
				for(var i = 0; i < data[1].length; i++){
					if(data[1][i] === undefined){
						wiki.innerHTML += '';
					} else {
						wiki.innerHTML += '<a href="https://wikipedia.com/wiki/'+data[1][i]+'"><div class="entry"><h3>'+data[1][i]+'</h3>' + '<span>'+data[2][i]+'</span></div></a>';
					}
				
				
			}

			}

			

			//console.log(data[1][0]);
			//console.log(data[2][0]);

		}

		json.onerror = function() {
			console.log("There was an error!");
		}



		json.send();
	}

});




