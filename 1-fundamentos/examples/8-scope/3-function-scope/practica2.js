/**
 * La solucion a esto es mucho mas facil cambiando var por let
 */
const showNumbers = () => {
    for (var i = 0; i < 10; i++) {
        function print(n) {
            setTimeout(() =>  {
                console.log(n);
            }, 1000);
        }
        print(i);
    }
}
showNumbers();