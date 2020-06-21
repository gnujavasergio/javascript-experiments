function get(URL, callback) {
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		const DONE = 4;
		const OK = 200;
		if (this.readyState === DONE) {
			if (this.status === OK) {
				callback(null, JSON.parse(this.responseText));
			} else {
				callback(
					new Error(
						`Se produjo un error al realizar el request: ${this.status}`
					)
				);
			}
		}
	};

	xhr.open('GET', URL);
	xhr.send(null);
}

function handleError(err) {
	console.log(`Request failed: ${err}`);
}

get('https://swapi.co/api/people/1', function onResponse(err, luke) {
	if (err) return handleError();
	get(luke.homeworld, function onHomeResponse(err, homeworld) {
		if (err) return handleError();
		luke.homeworld = homeworld;
		console.log(`${luke.name} nació en ${luke.homeworld.name}`);
	});
});

fetch('https://swapi.co/api/people/1').then(response => {
	return response.json();		
}).then(luke => {
  console.log(`${luke.name}`);
  fetch(luke.homeworld)
		.then(responseHomeWorld => {
			return responseHomeWorld.json();
		})
		.then(homeworld => {
			luke.homeworld = homeworld;
			console.log(`${luke.name} nació en ${luke.homeworld.name}`);
		});
});
