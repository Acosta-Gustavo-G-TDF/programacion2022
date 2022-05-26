function cargarNombres(alum: string[]): void {
  for (let i: number = 0; i < cantidad; i++) {
    alum[i] = prompt("Ingrese el nombre del alumno:");
  }
}

function cargarNotas(not1: number[], not2: number[], not3: number[]): void {
  for (let i: number = 0; i < cantidad; i++) {
    not1[i] = Number(prompt("Ingrese la primera nota:"));
    not2[i] = Number(prompt("Ingrese la segunda nota:"));
    not3[i] = Number(prompt("Ingrese la tercera nota:"));
  }
}

function promedioAnual(
  prom: number[],
  not1: number[],
  not2: number[],
  not3: number[]
): void {
  for (let i: number = 0; i < cantidad; i++) {
    prom[i] = (not1[i] + not2[i] + not3[i]) / 3;
  }
}

function mostar(
  alum: string[],
  not1: number[],
  not2: number[],
  not3: number[],
  prom: number[]
): void {
  for (let i: number = 0; i < cantidad; i++) {
    console.log("El alumno es:", alum[i]);
    console.log("Sus notas son:", not1[i], not2[i], not3[i]);
    console.log("Y su promedio es:", prom[i]);
  }
}

let cantidad: number = Number(
  prompt("Ingrese la cantidad de alumnos a registrar:")
);
let alumnos: string[] = new Array(cantidad);
let nota1: number[] = new Array(cantidad);
let nota2: number[] = new Array(cantidad);
let nota3: number[] = new Array(cantidad);
let promedio: number[] = new Array(cantidad);

cargarNombres(alumnos);
cargarNotas(nota1, nota2, nota3);
promedioAnual(promedio, nota1, nota2, nota3);
mostar(alumnos, nota1, nota2, nota3, promedio);
