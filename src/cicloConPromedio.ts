let numero: number;
let contPos: number = 0;
let contNeg: number = 0;
let acum: number;

do {
  numero = Number(prompt("Ingrese el numero:"));
  if (numero > 0) {
    contPos++;
  } else if (numero < 0) {
    contNeg++;
  }
} while (numero !== 0);

acum = contPos + contNeg;

console.log("Cantidad de postivos es:", contPos);
console.log("Su porcentaje es:", (contPos / acum) * 100);
