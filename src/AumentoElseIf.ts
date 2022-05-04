let sueldo: number = Number(prompt("Ingrese el sueldo del empleado:"));
let nuevoSueldo: number;

if (sueldo > 0 && sueldo < 15000) {
  nuevoSueldo = sueldo * 1.2;
  console.log("El nuevo sueldo del empleado es:", nuevoSueldo);
} else if (sueldo > 15001 && sueldo < 20000) {
  nuevoSueldo = sueldo * 1.1;
  console.log("El nuevo sueldo del empleado es:", nuevoSueldo);
} else if (sueldo > 20001 && sueldo < 25000) {
  nuevoSueldo = sueldo * 1.05;
  console.log("El nuevo sueldo del empleado es:", nuevoSueldo);
} else {
  console.log("No hay aumento");
}
