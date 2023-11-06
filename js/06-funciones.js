//funciones declarativas
function saludar(){
    //todas las lineas de codigo que quiero hacer para saludar
    document.write('<p>Hola mundo</p>');
}

function saludoNuevo(nombreIgresado, apellidoIngresado){
    document.write(`<p>Hola ${nombreIgresado}, ${apellidoIngresado}. Que tengas un buen día</p>`);
}



//invocar o llamar una función
saludar();

const nombre = prompt('Ingrese un nombre');
const apellido = prompt('Ingrese un apellido');

saludoNuevo(nombre,apellido);
saludoNuevo('Peter','Parker');
saludoNuevo('Batman');
