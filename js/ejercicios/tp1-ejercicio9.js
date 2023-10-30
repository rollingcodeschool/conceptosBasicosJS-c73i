//length -> cantidad de caracteres de un string
// frase.chartAt(0);
// hola mundo
// frase.toLowerCase() pasa el contenido de la frase a minusculas
const frase = prompt('Ingrese una frase').toLowerCase();
// frase = frase.toLowerCase();
console.log(frase.length);
console.log(frase);
console.log(frase.charAt(0));

for(let indiceFrase = 0; indiceFrase < frase.length; indiceFrase++){
    if( frase.charAt(indiceFrase) === 'a' || frase.charAt(indiceFrase) === 'e' || frase.charAt(indiceFrase) === 'i' || frase.charAt(indiceFrase) === 'o' || frase.charAt(indiceFrase) === 'u'){
        document.write(frase.charAt(indiceFrase));
    }
}