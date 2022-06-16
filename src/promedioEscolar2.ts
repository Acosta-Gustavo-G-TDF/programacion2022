let cantidad: number = Number(prompt("Ingrese la cantidad de alumnos:"));
let alumno: string[] = new Array(cantidad);
let nota1: number[] = new Array(cantidad);
let nota2: number[] = new Array(cantidad);
let nota3: number[] = new Array(cantidad);
let promedio: number = 0;
let posicion = -1;
let alumn: string;

function cargarAlumno(alum: string[]): void {
  for (let i: number = 0; i < cantidad; i++) {
    alum[i] = prompt("Ingrese el nombre del alumno:");
  }
}

function cargarNotas(not1: number[], not2: number[], not3: number[]): void {
  for (let i: number = 0; i < cantidad; i++) {
    not1[i] = Number(prompt("Ingrese la primera nota:"));
    not2[i] = Number(prompt("Ingrese la segunda nota:"));
    not3[i] = Number(prompt("Ingrese la tercer nota:"));
  }
}

function buscarAlumno(): number {
  for (let i: number = 0; i < cantidad; i++) {
    if (alumn === alumno[i]) {
      posicion = i + 1;
    }
  }
  return posicion;
}

function obetenerPromedio(i: number): number {
  let promedio = (nota1[i] + nota2[i] + nota3[i]) / 3;
  return promedio;
}

cargarAlumno(alumno);
cargarNotas(nota1, nota2, nota3);
let alumn: string = prompt("Ingrese el nombre del alumno a buscar: ");
if (buscarAlumno(alumn) === -1) {
  console.log("Alumno no encontrado");
} else {
  console.log(
    "El alumno es:",
    alumn,
    "y su promedio es:",
    obetenerPromedio(buscarAlumno(alumn))
  );
}
