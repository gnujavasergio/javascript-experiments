even:
    for (let index = 1; index <= 10; index++) {
        if (index % 2 == 1) {
            continue even;
        }
        console.log(index);
    }