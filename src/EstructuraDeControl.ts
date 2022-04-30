//comentario//
let precioProducto: number = Number(prompt("Ingrese el prcio del producto:"));
let cantidad: number = Number(prompt("Ingrese la cantidad:"));
let compra: number = precioProducto * cantidad;
if (compra > 1000) {
  console.log("El precio de compra es:", compra - compra * 0.1);
} else {
  console.log("El precio de la compra es:", compra);
}
