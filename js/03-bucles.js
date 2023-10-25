/*
while(condicion logica){
    todas las lineas de codigo que quiero repetir varias veces
    agregar un codigo para que la condicion no se cumpla en algún momento
}
*/
let numero= 1;

// document.write('<p>Renglón número '+numero +'</p>');

while( numero <= 10){
    document.write(`<p>Renglón número ${numero}</p>`);
    numero++  // numero = numero + 1;
}

/*
do{
    todas las lineas de codigo que quiero repetir varias veces
    agregar un codigo para que la condicion no se cumpla en algún momento
}while(condicion logica)
*/

let contador = 0;

do{
    document.write(`<p>Renglón número ${contador} con do-while</p>`);
    contador--  // contador = contador - 1;
}while( contador >= 1)