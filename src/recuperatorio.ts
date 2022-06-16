let cantidadProductos: number = Number(
  prompt("Ingrese la cantidad de productos:")
);
let nombreProducto: string[] = new Array(cantidadProductos);
let precioProducto: number[] = new Array(cantidadProductos);
let Stock: number[] = new Array(cantidadProductos);
let precioTotal: number = 0;

function cargarNombre(nombre: string[]): void {
  for (let i: number = 0; i < cantidadProductos; i++) {
    nombre[i] = prompt("Ingrese el nombre del producto " + i);
  }
}

function cargarPrecio(precio: number[]) {
  for (let i: number = 0; i < cantidadProductos; i++) {
    precio[i] = Number(prompt("Ingrese el precio de " + nombreProducto[i]));
    while (precio[i] <= 0) {
      precio[i] = Number(prompt("Ingrese el precio de " + nombreProducto[i]));
    }
  }
}

function cargarStock(st: number[]): void {
  for (let i = 0; i < cantidadProductos; i++) {
    st[i] = Number(prompt("Ingrese el stock de " + nombreProducto[i]));
    while (st[i] <= 0) {
      st[i] = Number(prompt("Ingrese el stock de " + nombreProducto[i]));
    }
  }
}

function calcularPrecio(precioP: number[], st: number[]) {
  let total: number = 0;
  for (let i = 0; i < cantidadProductos; i++) {
    total = total + precioP[i] * st[i];
  }
  return total;
}

function mostar(nombre: string[], precio: number[], cant: number[]): void {
  console.log("Detalle de la compra:");
  for (let i: number = 0; i < cantidadProductos; i++) {
    console.log(
      "|Nombre del producto|: ",
      nombre[i],
      "|Precio|: ",
      precio[i],
      "|Cantidad|:",
      cant[i],
      "|Valor total|: ",
      precio[i] * cant[i]
    );
  }
}

cargarNombre(nombreProducto);
cargarPrecio(precioProducto);
cargarStock(Stock);
precioTotal = calcularPrecio(precioProducto, Stock);
mostar(nombreProducto, Stock, precioProducto);
//console.log("Precio total:", precioTotal);

if (precioTotal < 1000) {
  console.log("|El precio total es|:", precioTotal, " |No participa por nada|");
} else if (precioTotal >= 1000 && precioTotal < 2000) {
  console.log(
    "|El precio total es|:",
    precioTotal,
    " |Participa por un Tv Led|"
  );
} else if (precioTotal >= 2000 && precioTotal < 3000) {
  console.log(
    "|El precio total es|:",
    precioTotal,
    " |Participa por una moto 0 Km||"
  );
} else if (precioTotal >= 3000) {
  console.log(
    "|El precio total es|:",
    precioTotal,
    " |Participa por un auto 0 Km|"
  );
}
