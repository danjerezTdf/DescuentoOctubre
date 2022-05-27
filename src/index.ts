/* Ejercicio – Descuento Octubre
• Una tienda al cumplir años en Octubre ofrece
un descuento del 15% a sus clientes en todas
sus compras
• Desarrolle un algoritmo que dada una compra:
precio unitario, cantidad y el mes, indicados
por el usuario, determine si el cliente tiene
descuento o no */

let precioUnitario: number = Number(prompt(`Ingreser Precio Unitario:`));
let cantidad: number = Number(prompt(`Ingrese Cantidad`));
let mesCompra: number = Number(
  prompt(`Ingreser Mes de la Compra - Ej. Enere = 1, Diciembre =12`)
);

let subTotal: number = precioUnitario * cantidad;

if (mesCompra === 10) {
  let totalCompra: number = subTotal * 0.85;
  console.log(
    `Usted tiene un descuento del 15% y debe Abonar: $${totalCompra}`
  );
} else {
  console.log(`Usted debe Abonar: $${subTotal}`);
}
