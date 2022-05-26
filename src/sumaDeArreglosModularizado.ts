function cargarVector(arreglo: number[]): void {
  for (let i: number = 0; i < 6; i++) {
    arreglo[i] = Number(prompt("Ingrese un numero:"));
  }
}

function sumaArreglos(
  vector1: number[],
  vector2: number[],
  vectorSuma: number[]
): void {
  for (let i: number = 0; i < 6; i++) {
    vectorSuma[i] = vector1[i] + vector2[i];
  }
}

function mostrarSuma(vectorSuma: number[]): void {
  for (let i: number = 0; i < 6; i++) {
    console.log(vectorSuma[i]);
  }
}

let vec1: number[] = new Array(6);
let vec2: number[] = new Array(6);
let vecSuma: number[] = new Array(6);

cargarVector(vec1, 6);
cargarVector(vec2, 6);
sumaArreglos(vec1, vec1, vecSuma, 6);
mostrarSuma(vecSuma, 6);
