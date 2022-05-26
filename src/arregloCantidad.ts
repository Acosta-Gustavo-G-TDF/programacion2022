let longitud: number = Number(prompt("Ingrese la longitud del arreglo:"));
let vec: number[] = new Array(longitud);
let cantpos: number = 0;
let cantneg: number = 0;
let cantcer: number = 0;
let post: number[]=new Array(cantpos);
let neg: number[]=new Array(cantneg);

function cargaDeVector(vector: number[]): void {
  for (let i: number = 0; i < longitud; i++) {
    vector[i] = Number(prompt("Ingrese un numero:"));
  }
}

function cantidadNumeros(vector: number[]): void {
  for (let i: number = 0; i < longitud; i++) {
    cargaDeVector(vector, longitud);
    if (vector[i] > 1) {
      cantpos++;
    } else if (vector[i < 0]) {
      cantneg++;
    } else if (vector[i] === 0) {
      cantneg++;
    }
  }
}

function mostrarCantidad(): void {
  console.log(
    "La cantidad de postivos es:",
    cantidadPositivos,
    "La cantidad de negativos es:",
    cantidadNegativos,
    "La cantidad de ceros es:",
    cantidadCero
  );
}

cantidadNumeros(vector, longitud);
mostrarCantidad(cantidadPositivos, cantidadNegativos, cantidadCero);
