let numero: number;
let menor: number = 9999;
let mayor: number = -9999;
let continuar: number = 1;
let acum: number = 0;
let cont: number = 0;

while (continuar !== 0) {
  numero = Number(prompt("Ingrese un numero:"));
  cont++;
  acum = acum + numero;
  continuar = Number(prompt("Continuar?"));
}

console.log("Promedio:", acum / cont);
