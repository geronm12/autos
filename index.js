
//Llamamos el array de objetos de autos
const autos = require("./autos.json");
//Llamamos el archivo funciones que se encuentra en la carpeta utils
const funciones = require("./utils/functions");

//Llamamos a la listra de precios que vamos a usar 
const listaPrecios = funciones.PreciosOrder(autos);

//función show

funciones.Show(autos);
console.log("=============================");

//Pasamos la lista de precios como parámetro en ambas funciones, también podemos pasar directamente el método funciones.PrecioAlto(funciones.PreciosOrder(autos), autos);
funciones.PrecioAlto(listaPrecios, autos);

funciones.PrecioBajo(listaPrecios, autos);

//Objetos que posean Y en su marca
funciones.AutoY(autos);
console.log("=============================");
funciones.OrderBy(autos);
