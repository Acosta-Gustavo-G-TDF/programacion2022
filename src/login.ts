let usuario: string = String(prompt("Ingrese el usuario:"));
let contraseña: string = String(prompt("Ingrese la contraseña"));

if (usuario === "user" && contraseña === "password") {
  console.log("Usuario registrado");
} else {
  console.log("Datos no validos");
}
