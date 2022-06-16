let aulaAzul: number = 40;
let aulaVerde: number = 35;
let aulaAmarilla: number = 30;
let resultado: string;
let infantes: number = Number(prompt("Ingrese la cantidad de infantes:"));

function asignarAula(
  aulaAz: number,
  aulaV: number,
  aulaAm: number,
  inf: number
): void {
  if (inf >= 37) {
    console.log("El aula asignada sera el aula Azul");
  } else if (inf <= 37 && inf >= 33) {
    console.log("El aula asignada sera el aula Verde");
  } else if (inf <= 33 && inf >= 1) {
    console.log("El aula asignada sera el aula Amarilla");
  }
}

asignarAula(aulaAzul, aulaVerde, aulaAmarilla, infantes);
