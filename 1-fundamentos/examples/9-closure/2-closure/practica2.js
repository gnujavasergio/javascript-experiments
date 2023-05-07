function sumWithClosure(firstNum) {
    return function (secondNum) {
        return !secondNum ? firstNum : firstNum + secondNum;
    }
}

console.log(sumWithClosure(2)(3));

