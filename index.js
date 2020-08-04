const autos = require("./autos.json");
const funciones = require("./utils/functions");




const listaPrecios = funciones.PreciosOrder(autos);

funciones.Show(autos);
console.log("=============================");
funciones.PrecioAlto(listaPrecios, autos);

funciones.PrecioBajo(listaPrecios, autos);

funciones.AutoY(autos);
console.log("=============================");
funciones.OrderBy(autos);
