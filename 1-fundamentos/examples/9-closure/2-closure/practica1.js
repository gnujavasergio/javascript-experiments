// Resolviendo este problema con POO
class MoneyBox {

    constructor() {
        this.coins = 0
    }

    countCoins(coins) {
        this.coins += coins;
    }

    showCoins() {
        console.log(`Ahorro: $${this.coins}`);
    }
}

let moneyBoxSergio = new MoneyBox();
moneyBoxSergio.countCoins(5);
moneyBoxSergio.showCoins();
moneyBoxSergio.countCoins(5);
moneyBoxSergio.showCoins();
moneyBoxSergio.countCoins(15);
moneyBoxSergio.showCoins();
