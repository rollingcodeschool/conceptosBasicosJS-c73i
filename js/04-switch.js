// si el usuario presiona 1 consulte el saldo, 2 extraer dinero, 3 ingresar dinero;

let saldo = 1000;

const opcion = prompt(
    "seleccione una opción: 1- Consultar el saldo, 2- Extraer dinero, 3- Ingresar dinero"
  );

// if (opcion === 1) {
//   //console.log("debo mostrar el saldo");
//   console.log("Saldo disponible: " + saldo);
// } else if (opcion === 2) {
//   //console.log("extraer dinero");
//   const montoAExtraer = parseFloat(prompt("Ingrese el monto a extraer"));
//   if (montoAExtraer > 0 && montoAExtraer <= saldo) {
//     saldo = saldo - montoAExtraer;
//     console.log("EXTRACCIÓN EXITOSA");
//     console.log("Saldo disponible: " + saldo);
//     document.write("<p>EXTRACCIÓN EXITOSA</p>");
//     document.write("Saldo disponible: " + saldo);
//   } else {
//     alert("Ingrese un monto mayor a 0 (cero)");
//   }
// } else if (opcion === 3) {
//   //console.log("ingresar dinero");
//   const montoAIngresar = parseFloat(prompt("Ingrese el monto a agregar"));
//   if (montoAIngresar > 0) {
//     saldo = saldo + montoAIngresar;
//     console.log("INGRESO EXITOSO");
//     console.log("Saldo disponible: " + saldo);
//     document.write("<p>INGRESO EXITOSO</p>");
//     document.write("Saldo disponible: " + saldo);
//   } else {
//     alert("Ingrese un monto mayor a 0 (cero)");
//   }
// } else {
//   alert("Ingresó una opción inválida");
// }

switch (opcion) {
  case 'saldo':
  case 'consultar saldo':
  case '1':
    console.log("Saldo disponible: " + saldo);
    document.write("Saldo disponible: " + saldo + "<br>");
    break;
  case '2':
    const montoAExtraer = parseFloat(prompt("Ingrese el monto a extraer"));
    if (montoAExtraer > 0 && montoAExtraer <= saldo) {
      saldo = saldo - montoAExtraer;
      console.log("EXTRACCIÓN EXITOSA");
      console.log("Saldo disponible: " + saldo);
      document.write("<p>EXTRACCIÓN EXITOSA</p>");
      document.write("Saldo disponible: " + saldo);
    } else {
      alert("Ingrese un monto mayor a 0 (cero)");
    }
    break;
  case '3':
    const montoAIngresar = parseFloat(prompt("Ingrese el monto a agregar"));
    if (montoAIngresar > 0) {
      saldo = saldo + montoAIngresar;
      console.log("INGRESO EXITOSO");
      console.log("Saldo disponible: " + saldo);
      document.write("<p>INGRESO EXITOSO</p>");
      document.write("Saldo disponible: " + saldo);
    } else {
      alert("Ingrese un monto mayor a 0 (cero)");
    }
    break;
default:
    alert("Ingresó una opción inválida");
}
