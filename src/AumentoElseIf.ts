let sueldo: number = Number(prompt("Ingrese el sueldo del empleado:"));
let aumento: number;

if (sueldo > 0 && sueldo <= 15000) {
  aumento = sueldo * 1.2;
  console.log("El aumento de sueldo del empleado es:", aumento - sueldo);
} else if (sueldo >= 15001 && sueldo <= 20000) {
  aumento = sueldo * 1.1;
  console.log("El aumento de sueldo del empleado es:", aumento - sueldo);
} else if (sueldo >= 20001 && sueldo <= 25000) {
  aumento = sueldo * 1.05;
  console.log("El aumento de sueldo del empleado es:", aumento - sueldo);
} else {
  console.log("No hay aumento");
}
/*
Datos de entrada                          Salida deseada 

sueldo > 0 && sueldo <= 15000             Aumento 20%

sueldo => 15001 && sueldo <= 20000        Aumento 15%

sueldo => 20001 && sueldo <= 25000        Aumento 10%

sueldo > 25000                            No hay aumento*/
