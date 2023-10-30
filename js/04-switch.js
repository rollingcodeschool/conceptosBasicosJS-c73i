// si el usuario presiona 1 consulte el saldo, 2 extraer dinero, 3 ingresar dinero;

let saldo = 1000;

const opcion = parseInt(prompt('Seleccione una opción: 1- consultar el saldo, 2- extraer dinero, 3- ingresar dinero'));

if(opcion === 1){
    console.log('debo mostrar el saldo');
}else if(opcion === 2){
    console.log('extraer el dinero');
}else if(opcion === 3){
    console.log('ingresar el dinero');
}else{
    console.log('ingreso una opción invalida');
}

// tarea agregar la logica correspondiente a la opcion 1, 2 y 3