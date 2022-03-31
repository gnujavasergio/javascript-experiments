//
var moneyBox1 = (coins) => {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(saveCoins);
}
moneyBox1(5);
moneyBox1(10);

const moneyBox = () => {
    let saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
};

let myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);

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
moneyBoxSergio.countCoins(4);
moneyBoxSergio.showCoins();
moneyBoxSergio.countCoins(6);
moneyBoxSergio.showCoins();
moneyBoxSergio.countCoins(10);
moneyBoxSergio.showCoins();

