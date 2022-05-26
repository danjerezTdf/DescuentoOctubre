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
