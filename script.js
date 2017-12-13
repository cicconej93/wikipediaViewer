


document.addEventListener('keydown', function(event) {
	if (event.key === "Enter") {
		var search = document.getElementById('search').value;
		console.log(search);
		var json = new XMLHttpRequest();

		json.open('GET', 'https://en.wikipedia.org/w/api.php?action=query&titles='+search+'&prop=revisions&rvprop=content&format=json');


		json.onload = function() {
			console.log("This");
			var data = JSON.parse(json.responseText);
			console.log(data);

		}

		json.onerror = function() {
			console.log("There was an error!");
		}



		json.send();
	}

});


