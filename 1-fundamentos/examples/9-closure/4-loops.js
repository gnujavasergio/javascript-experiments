// closure creando intencionalmente esto se soluciona colocando let en ver de var
const showNumbers = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(() =>  {
            console.log(i);
        }, 1000);
    }
}
showNumbers();