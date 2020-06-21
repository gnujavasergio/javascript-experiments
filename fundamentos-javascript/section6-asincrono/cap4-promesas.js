function get(URL) {
	return new Promise((resolved, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			const DONE = 4;
			const OK = 200;
			if (this.readyState === DONE) {
				if (this.status === OK) {
					resolved(JSON.parse(this.responseText));
				} else {
					reject(
						new Error(
							`Se produjo un error al realizar el request: ${this.status}`
						)
					);
				}
			}
		};

		xhr.open('GET', URL);
		xhr.send(null);
	});
}

function handleError(err) {
	console.log(`Request failed: ${err}`);
}
let luke;
get('https://swapi.co/api/people/1')
	.then(response => {
		luke = response;
		return get(luke.homeworld);
	})
	.then(response => {
		luke.homeworld = response;
		console.log(`${luke.name} nació en ${luke.homeworld.name}`);
	})
	.catch(reason => {
		handleError(reason);
	});

let lukeFetch;
fetch('https://swapi.co/api/people/1')
	.then(response => response.json())
	.then(json => {
		lukeFetch = json;
		return fetch(lukeFetch.homeworld);
	})
	.then(response => response.json())
	.then(json => {
		lukeFetch.homeworld = json;
		console.log(`${lukeFetch.name} nació en ${lukeFetch.homeworld.name}`);
	});
