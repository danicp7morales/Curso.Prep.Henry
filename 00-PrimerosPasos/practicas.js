const automoviles = [
    { name:'Renault Megane', precio:16000 },
    { name:'Toyota Corolla', precio:17000 },
    { name:'Honda Civic', precio:18000 }
];

// ES5
/*const precios = automoviles.map(function(automovil) {
    return automoviles.precio;
});

return precios;*/

const precios = automoviles.map(automovil => automovil.precio);
return precios;






const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// ES5
var divisibleEntreCuatroES5 = array.filter(function (n){
    return n % 4 === 0;
});

// ES6
const divisibleEntreCuatroES6 = array.filter(n => n % 4 === 0);

console.log(divisibleEntreCuatroES6); // [4, 8, 12, 16, 20]



;