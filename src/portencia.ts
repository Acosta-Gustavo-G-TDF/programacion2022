let base: number = Number(prompt("Ingrese la base:"));
let exponente: number = Number(prompt("Ingrese el exponente"));
let resultado: number;

function calcularPotencia(base: number, exponente: number): number {
  let r: number = 1;
  for (let i: number = 1; i <= exponente; i++) {
    r = base * r;
  }
  return r;
}
resultado = calcularPotencia(base, exponente);
console.log(resultado);
