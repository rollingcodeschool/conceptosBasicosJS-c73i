// es divisible por 2, 3 , 5 y 7

const numeroIngresado = parseInt(prompt("Ingrese un número"));

if (
  numeroIngresado % 2 === 0 &&
  numeroIngresado % 3 === 0 &&
  numeroIngresado % 5 === 0 &&
  numeroIngresado % 7 === 0
) {
  alert(`El número ingresado: ${numeroIngresado} es divisible por 2, 3, 5 y 7`);
} else {
  if (numeroIngresado % 2 === 0) {
    document.write("Es divisible por 2 ");
  }
  if (numeroIngresado % 3 === 0) {
    document.write("Es divisible por 3 ");
  }
  if (numeroIngresado % 5 === 0) {
    document.write("Es divisible por 5 ");
  }
  if (numeroIngresado % 7 === 0) {
    document.write("Es divisible por 7 ");
  }
  // alert(`El número ingresado: ${numeroIngresado} no es divisible por todos`)
}
