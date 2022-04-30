let clave: string = prompt("Ingrese clave");
let cont = 1;
let continuar: string = prompt("y");

while (cont < 3 && continuar == "y") {
  if (clave === "eureka") {
    console.log("Clave Correcta");
    continuar = "n";
  } else {
    console.log("Clave incorrecta");
  }
  cont++;
  let clave: string = prompt("Ingrese clave");
}
if (continuar === "y") {
  console.log("Acabaste los intentos");
}
