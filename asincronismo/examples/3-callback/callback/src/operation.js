function addition(num1, num2) {
    return num1 + num2;
}

function substraction(num1, num2) {
    return num1 - num2;
}

function executeOperation(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(executeOperation(3,5, addition));

console.log(executeOperation(3,5, substraction));

