function mostarNombres(longitud: number) {
  for (let i: number = 0; i < longitud; i++) {
    console.log(arregloNombres[i]);
  }
}

let longitud: number = Number(prompt("Ingrese la longitud del arreglo:"));
let arregloNombres: string[] = new Array(longitud);

for (let i: number = 0; i < longitud; i++) {
  arregloNombres[i] = prompt("Ingrese nombre:");
}

mostarNombres(longitud);
