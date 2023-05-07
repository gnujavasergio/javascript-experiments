// convertir el ejemplo 2 para que podamos modificar el contador;

const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    }
    return {
        getCount: () => {
            return count;
        },
        setCount: (j) => {
            count = j;
        },
        displayCount,
    }
}

const count = buildCount(1);
count.displayCount();
count.setCount(5);
count.displayCount();
console.log('count: ' + count.getCount());
count.displayCount();

const increment = buildCount(10);
increment.displayCount();
increment.setCount(15);
increment.displayCount();



