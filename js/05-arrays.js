//declarar un array

const productos = [];

const juegos = ['counter-strike', 'Minecraft', 2023, true, 'valorant', 'half-life','lol'];

function mostrarJuegos(titulo){
    document.write(`<h2>${titulo}</h2>`)
    document.write(`<ul>`);
    for(let i = 0; i < juegos.length; i++){
        document.write(`<li>${juegos[i]}</li>`);
    }
    document.write(`</ul>`);
}

//cantidad de elementos en el array
console.log(juegos.length);

//mostrar un array
document.write(juegos);
console.log(juegos);

document.write(`<p>El primer juego es ${juegos[0]}</p>`)
document.write(`<p>El ultimo juego es ${juegos[juegos.length - 1]}</p>`)
document.write(`<p>juego de la posicion 20: ${juegos[20]}</p>`)

mostrarJuegos('Lista de juegos')

//agregar elementos al array
juegos.unshift('god of war','Street fighter');
mostrarJuegos('Lista de juegos + 2 juegos extras')

juegos.splice(6,0,'Dark Souls');
mostrarJuegos(`Lista de juegos + 1, cantidad total (${juegos.length})`)

juegos.push('Mortal Kombat');
mostrarJuegos(`Lista de juegos + 1, cantidad total (${juegos.length})`)

//modificamos los elementos de un array
juegos[5] = 'Stardew valley';
mostrarJuegos(`Lista de juegos, modificamos un elemento del array (${juegos.length})`)

//eliminar elementos del array
juegos.shift();
mostrarJuegos(`Lista de juegos - 1 elemento del array (${juegos.length})`)

juegos.splice(3,1);
// juegos.splice(3,3);
// juegos.splice(3);
mostrarJuegos(`Lista de juegos - 1 elemento del array (${juegos.length})`)

juegos.pop(); //borra el ultimo elemento del array
mostrarJuegos(`Lista de juegos - 1 elemento del array (${juegos.length})`)




