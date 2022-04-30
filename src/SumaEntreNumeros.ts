let primerNumero: number = Number(prompt("Ingrese el primer numero:"));
let segundoNumero: number = Number(prompt("Ingrese el segundo numero:"));
let acum: number = 0;
let cont: number = primerNumero;

while (cont <= segundoNumero) {
  acum = acum + cont;
  cont++;
}

console.log(acum);
