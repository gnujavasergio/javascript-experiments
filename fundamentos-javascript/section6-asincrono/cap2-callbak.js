const ejemplo1 = () => {
	setTimeout(function() {
		console.log('ya pasaron 3 segundos');
	}, 3000);

	console.log('hola');
};

//ejemplo1();

const ejemplo2 = () => {
	setTimeout(function() {
		console.log('A');
	}, 0);

	console.log('B');
};

// ejemplo2();

const ejemplo3 = () => {
	setTimeout(function() {
		console.log('A');
	}, 1000);
  // Nose se tiene que hacer que la ejecucion tanto 
  // es mejor delegarlo otro metodo
  // Reducir a lo mas minimo posible
  // Esto codigo seria mejor que lo ejecute un callback
  for(let i = 0; i < 9999999; i++) ;
	console.log('B');
};

ejemplo3();