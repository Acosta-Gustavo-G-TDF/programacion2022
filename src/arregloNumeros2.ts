function ingresarNumeros() {
  for (let i: number = 0; i <= 4; i++) {
    arreglo[i] = Number(prompt("Ingrese un numero:"));
  }
}

function mostrarNumeros() {
  for (let i: number = 0; i <= 4; i++) {
    console.log(arreglo[i]);
  }
}

let arreglo: number[] = new Array(5);

ingresarNumeros();
mostrarNumeros();
