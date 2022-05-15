let numero1: number = 1;
let numero2: number = 2;
let operacion: number = 1;

function operarDosNumeros(numero1: number, numero2: number, operacion: number) {
  let resultado: number = 0;
  if (operacion == 1) {
    resultado = numero1 + numero2;
    return resultado;
  }
  if (operacion == 2) {
    resultado = numero1 - numero2;
    return resultado;
  }
  return resultado;
}

let r: number = operarDosNumeros(numero1, numero2, operacion);
console.log(r);
