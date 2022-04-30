let primerNumero: number = Number(prompt("Ingrese el primero numero:"));
let segundoNumero: number = Number(prompt("Ingrese el segundo numero:"));
let acum: number = 0;

if (primerNumero < segundoNumero) {
  for (let i: number = primerNumero; i <= segundoNumero; i++) {
    acum = acum + i;
  }
  console.log("La suma total es:", acum);
} else {
  for (let i: number = segundoNumero; i <= primerNumero; i++) {
    acum = acum + i;
  }
  console.log("La suma total es:", acum);
}

if (primerNumero === segundoNumero) {
  console.log("Ambos numeros son iguales");
}
