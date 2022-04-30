let primerNumero: number = Number(prompt("Ingrese el primero numero:"));
let segundoNumero: number = Number(prompt("Ingrese el segundo numero:"));
let acum, aux: number;
acum = 0;

if (primerNumero > segundoNumero) {
  aux = primerNumero;
  primerNumero = segundoNumero;
  segundoNumero = aux;
}

for (let i: number = primerNumero; i <= segundoNumero; i++) {
  acum = acum + i;
}
console.log("La suma total es:", acum);
