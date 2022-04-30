//Posicion Carrera//
let posicionCarrera: number = Number(
  prompt("Ingrese la posicion de la carrea")
);
if (posicionCarrera === 1) {
  console.log("Se le entregara la medalla de oro");
}
if (posicionCarrera === 2) {
  console.log("Se le entregara la medalla de plata");
}
if (posicionCarrera === 3) {
  console.log("Se le entregara la medalla de bronce");
}
if (posicionCarrera > 3) {
  console.log("Se le entregara un certificado de participacion");
}
/*
Datos de entrada:             Salida deseada:
posicionCarrera = 1           Se le entregara la medalla de oro

posicionCarrera = 2           Se le entregara la medalla de plata

posicionCarrera = 3           Se le entregara la medalla de bronce

posicionCarrera >3            Se le entregara un certificado de participacion*/
