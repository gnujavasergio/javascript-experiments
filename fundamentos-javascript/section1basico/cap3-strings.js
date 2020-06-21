function platzom(str){
    let translation = str;

    const reverse = (str) => str.split('').reverse().join('')
    const lowerUpperStr = (str) => {
        const length = str.length
        let translation = ''
        let capitalize = true
        for(let i = 0; i < length; i++){
            const char = str.charAt(i)
            translation += capitalize ? char.toUpperCase(): char.toLowerCase();
            capitalize = !capitalize            
        }
        return translation
    }

    // Si la palabra original es un palíndromo,
    // ninguna regla anterior cuenta y se devuelve
    // la misma  palabra intercalando mayúsculas y minúsculas
    if(str == reverse(reverse)){
        return lowerUpperStr(str);
    }

    // si l palabra termina en "ar", se le quitan esos dos caracteres
    if(str.toLowerCase().endsWith('ar')){
        translation = str.slice(0,-2);
    }

    // Si la palabra inicia con Z, se le añade "pe" al final
    if(str.toLowerCase().startsWith('z')){
        translation += 'pe';
    }

    // Si la palabra traducida tiene 10 o mas letras, 
    // se debe partir a la mitad y unir con un guión en el medio
    const length = translation.length;
    if(length >= 10){
        const firstHalf = translation.slice(0, Math.random(length/2))
        const secondHalf = translation.slice(Math.random(length))
        translation = `{firstHalf}-${secondHalf}`
    }    

    return translation;
}

console.log(platzom("Programar")); //Program
console.log(platzom("Zorro")) // Zorrope
console.log(platzom("Zarpar")) // Zarparpe
console.log(platzom("abecedario")) // abece-dario
console.log(platzom("sometemos")); // SoMeTeMoS

