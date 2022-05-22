let primerArreglo: number[] = new Array(6);
let segundoArreglo: number[] = new Array(6);
let arregloSuma: number[] = new Array(6);

for (let i: number = 0; i < 6; i++) {
  primerArreglo[i] = Number(prompt("Ingrese el numero(Pimer Arreglo):"));
}

for (let i: number = 0; i < 6; i++) {
  segundoArreglo[i] = Number(prompt("Ingrese el numero(Segundo Arreglo):"));
}

for (let i: number = 0; i < 6; i++) {
  arregloSuma[i] = primerArreglo[i] + segundoArreglo[i];
  console.log(arregloSuma[i]);
}

/*for (let i: number = 0; i < 6; i++) {
  primerArreglo[i] = Number(prompt("Ingrese el numero(Pimer Arreglo):"));
  segundoArreglo[i] = Number(prompt("Ingrese el numero(Segundo Arreglo):"));
  arregloSuma[i] = primerArreglo[i] + segundoArreglo[i];
  console.log(arregloSuma[i]);
}*/
