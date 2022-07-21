function showDate(callback) {
    callback(new Date());
    setTimeout(() => {
        let date = new Date();
        callback(date);
    }, 3000)
}

function printDate(dateNow) {
    console.log(dateNow);
}

showDate(printDate)