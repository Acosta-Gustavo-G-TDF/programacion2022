function cantidadDeDivisiones(n: number): number {
  let cont: number = 0;
  for (let i: number = 1; i <= n; i++) {
    if (n % i === 0) {
      cont++;
    }
  }
  return cont;
}

let numero: number = Number(prompt("Ingrese un numero entero:"));

console.log(
  "El numero ingresado es: ",
  numero,
  "y la cantidad de divisores es:",
  cantidadDeDivisiones(numero)
);
