
//Función que toma todos los precios de los autos y los envía a un array independiente
function PreciosOrder(autos){
    const Precios = [];

    autos.forEach(auto => {
      Precios.push(auto.Precio);
    });
    
    return Precios;
}

//Funcion que obtiene el precio más bajo, toma el array de precios y el de autos, compara usando el filter de array y obtiene el 
//Precio más bajo usando la función Math.min
function PrecioBajo(precios, autos){
    let Precios = precios;
    
    let PBajo = Math.min(...Precios);

    let AutoPrecioBajo = autos.filter(x => PBajo === x.Precio);

    console.log(`Vehiculo más barato: ${AutoPrecioBajo[0].Marca} ${AutoPrecioBajo[0].Modelo}`);
}

//Función que obtiene el precio más alto, toma el array de precios y el de autos, compara usando el filter y obtiene el precio más alto con Math.max

function PrecioAlto(precios, autos){
   let Precios = precios;
   const PAlto =  Math.max(...Precios);
   const AutoPrecioAlto = autos.filter(x => PAlto === x.Precio);
   console.log(`Vehiculo más caro: ${AutoPrecioAlto[0].Marca} ${AutoPrecioAlto[0].Modelo}`);
}

//Show muestra por consola todos los autos
//Usamos operador ternario para definir si posee "Puertas" en caso de ser un auto o "Cilindrada" en caso de ser moto.
function Show(autos){
   autos.forEach(auto => {
    console.log(`Marca: ${auto.Marca} // Modelo: ${auto.Modelo} // ${auto.Puertas ? "Puertas:" + auto.Puertas  : "Cilindrada:" + auto.Cilindrada } // Precio: $${auto.Precio.toFixed(2)}`);
    });
}


//OrderBy ordena todos los autos de mayor precio a menor precio usando la función sort
function OrderBy(autos){
    
    let Ordenados = autos.sort((a,b) => {
        if(a.Precio > b.Precio){
            return -1;
        }
    
        if(a.Precio < b.Precio){
            return 1;
        }
    
        return 0;
    });
    
    console.log("Vehiculos ordenados por precio de mayor a menor:")
    Ordenados.forEach(auto => {
        console.log(`${auto.Marca} ${auto.Modelo}`)
    })
}


//Auto Y obtiene todos los autos dentro del array de objetos que posean una Y en su marca.

function AutoY(autos){
    
    const AutoY = autos.filter(x => x.Marca.includes("Y"));
    
    AutoY.forEach(auto => {
        console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${auto.Marca} ${auto.Modelo} $${auto.Precio.toFixed(2)}`);
    })

}



module.exports = {
    PrecioBajo,
    PrecioAlto,
    Show,
    OrderBy,
    PreciosOrder,
    AutoY
}