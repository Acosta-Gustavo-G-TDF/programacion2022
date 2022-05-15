function esMultiplo(dividendo: number, divisor: number): boolean {
  if (dividendo % divisor === 0) {
    return true;
  } else {
    return false;
  }
}

let numero1: number = Number(prompt("Ingrese el primer numero:"));
let numero2: number = Number(prompt("Ingrese el segundo numero:"));

let multiplo: boolean = esMultiplo(numero1, numero2);

if (multiplo === true) {
  console.log("Es multiplo");
} else {
  console.log("No es multiplo");
}

console.log(esMultiplo(numero1, numero2));
