function dibujarLineas() {
  let linea: string = "-";
  for (let i: number = 0; i <= 40; i++) {
    linea = linea + "-";
  }
  console.log(linea);
}
function sumar() {
  resultado = numero1 + numero2;
  dibujarLineas();
  console.log("El resultado de la suma es:", resultado);
  dibujarLineas();
}
function restar() {
  resultado = numero1 - numero2;
  dibujarLineas();
  console.log("El resultado de la resta es:", resultado);
  dibujarLineas();
}
function multiplicar() {
  resultado = numero1 * numero2;
  dibujarLineas();
  console.log("El resultado de la multiplicacion es:", resultado);
  dibujarLineas();
}
function dividir() {
  resultado = numero1 / numero2;
  dibujarLineas();
  console.log("El resultado de la division es:", resultado);
  dibujarLineas();
}
let numero1: number = Number(prompt("Ingrese el primero numero:"));
let numero2: number = Number(prompt("Ingrese el segundo numero:"));
let resultado: number;

let op: number = Number(
  prompt("Ingrese una opcion: 1-Sumar, 2-Restar, 3-Multiplicar, 4-Dividir")
);
switch (op) {
  case 1:
    sumar();
    break;
  case 2:
    restar();
    break;
  case 3:
    multiplicar();
    break;
  case 4:
    dividir();
    break;
  default:
    console.log("Opcion no valida");
}
