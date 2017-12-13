


document.addEventListener('keydown', function(event) {
	if (event.key === "Enter") {
		var search = document.getElementById('search').value;
		console.log(search);
		var json = new XMLHttpRequest();

		json.open('GET', 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+search+'&limit=10&format=json&origin=*');


		json.onload = function() {
			
			var data = JSON.parse(json.responseText);
			console.log(data);

		}

		json.onerror = function() {
			console.log("There was an error!");
		}



		json.send();
	}

});




