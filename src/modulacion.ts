function dibujarlinea() {
  let linea: string = "-";
  for (let i: number = 0; i <= 35; i++) {
    linea = linea + "-";
  }
  console.log(linea);
}

let numero1: number = Number(prompt("Ingrese el primer numero:"));
let numero2: number = Number(prompt("Ingrese el segundo numero:"));
let resultado: number;
let op: number = Number(prompt("Ingrese una opcion: 1 - Sumar, 2 - Restar"));

if (op === 1) {
  resultado = numero1 + numero2;
  dibujarlinea();
  console.log("El resultado de la suma es:", resultado);
  dibujarlinea();
} else if (op === 2) {
  resultado = numero1 - numero2;
  dibujarlinea();
  console.log("El resultado de la resta es:", resultado);
  dibujarlinea();
} else {
  dibujarlinea();
  console.log("Opcion no valida");
  dibujarlinea();
}
