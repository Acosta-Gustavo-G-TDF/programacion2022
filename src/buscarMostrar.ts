let cantidad: number = Number(
  prompt("Ingrese la cantidad de alumnos a registrar:")
);
let alumnos: string[] = new Array(cantidad);
let nota1: number[] = new Array(cantidad);
let nota2: number[] = new Array(cantidad);
let nota3: number[] = new Array(cantidad);
let posicion: number = -1;
let alumn: string;

function cargarAlumno(alumn: string[]): void {
  for (let i: number = 0; i < cantidad; i++) {
    alumn[i] = prompt("Ingrese el nonmbre del alumno:");
  }
}

function cargarNotas(not1: number[], not2: number[], not3: number[]): void {
  for (let i: number = 0; i < cantidad; i++) {
    not1[i] = Number(prompt("Ingrese la primera nota:"));
    not2[i] = Number(prompt("Ingrese la segunda nota:"));
    not3[i] = Number(prompt("Ingrese la tercera nota:"));
  }
}

function buscarAlumno(i: number): number {
  if (alumn === alumnos[i]) {
    posicion = i;
  }
  return posicion;
}

function mostarAlumno(i: number, posicion: number): void {
  console.log(nota1[posicion], nota2[posicion], nota3[posicion]);
}

cargarAlumno(alumnos);
cargarNotas(nota1, nota2, nota3);
buscarAlumno(alumn);
let alumn = prompt("Ingrese el nombre del alumno a buscar:");
console.log("Alumno encontrado:", alumn, "Sus notas son:", mostarAlumno());
