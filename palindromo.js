function palindromo(palabra){

    let izquierda = 0;
    let derecha = palabra.length-1;
    palabra = palabra.toLowerCase();

    while(izquierda < derecha){
        if(palabra[izquierda]!== palabra[derecha]){
            return false
        }
        izquierda++;
        derecha--;
    }
    return true;

}

console.log(palindromo('Ala'));
console.log(palindromo('tinkyWinky'));