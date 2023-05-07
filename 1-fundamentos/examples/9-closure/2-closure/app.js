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
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);


