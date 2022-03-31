const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    }
    return displayCount;
}

const count = buildCount(1);
count();
count();
count();

const increment = buildCount(10);
increment();
increment();

