function potencia() {
  if (base === 0) {
    poten = 1;
    console.log("La potencia es:", poten);
  } else {
    poten = base ** exponente;
    console.log("La potencia es:", poten);
  }
}

let base: number = Number(prompt("Ingrese la base:"));
let exponente: number = Number(prompt("Ingrese el exponente:"));
let poten: number;

if (exponente >= 0) {
  potencia();
} else {
  console.log("La potencia debe ser mayor o igual a 0");
}
