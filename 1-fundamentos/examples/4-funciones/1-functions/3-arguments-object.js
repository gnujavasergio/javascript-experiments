'use strict';

function printAll() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

printAll(1, 2, 3, 4, 5, 6, 7);
printAll(10, 15);