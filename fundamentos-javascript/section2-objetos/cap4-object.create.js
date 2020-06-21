const Punto = {
	init: function(x, y) {
		this.x = x;
		this.y = y;
	},
	moveX: function moveX(x) {
		this.x += x;
	},
	moveY: function moveY(y) {
		this.y += y;
	},
	distancia: function distancia(p) {
		const x = this.x - p.x;
		const y = this.y - p.y;
		return Math.sqrt(x * x + y * y);
	}
}

const p1 = Object.create(Punto)
const p2 = Object.create(Punto)

p1.init(0,4)
p2.init(3,0)

console.log(p1.distancia(p2));
console.log(p2.distancia(p1));
p1.moveX(10)
console.log(p1.distancia(p2));
p2.moveY(-4)
console.log(p1.distancia(p2));