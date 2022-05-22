let longitud: number = Number(prompt("Ingrese la longitud del arreglo:"));
let arregloNumeros: number[] = new Array(longitud);

for (let i: number = 0; i < longitud; i++) {
  arregloNumeros[i] = Number(prompt("Ingrese el numero:"));
}

function sumar(): number {
  let suma: number = 0;
  for (let i: number = 0; i < longitud; i++) {
    suma = suma + arregloNumeros[i];
  }
  return suma;
}

console.log(sumar());
