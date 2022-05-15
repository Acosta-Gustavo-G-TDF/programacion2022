let base: number = 1;
let altura: number = 2;

function calcularAreaTriangulo(bas: number, alt: number): number {
  return (bas * alt) / 2;
}

for (let i: number = 0; i < 7; i++) {
  console.log(calcularAreaTriangulo(base, altura));
  base += 1;
  altura += 2;
}
