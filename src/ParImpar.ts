let numero: number;
let pregunta: number = 1;
let ban: boolean = true;

while (ban == true) {
  numero = Number(prompt("Ingrese un numero:"));
  if (numero % 2 == 0) {
    console.log("El numero es par");
  } else {
    console.log("El numero es impar");
  }
  pregunta = Number(prompt("Continuar?"));
}
