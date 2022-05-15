function dibujarlinea(numero: number): string {
  let linea: string = "";
  for (let i: number = 0; i < numero; i++) {
    linea = linea + "-";
  }
  return linea;
}

for (let i: number = 0; i <= 10; i++) {
  let linea: string = dibujarlinea(i);
  console.log(linea);
}
