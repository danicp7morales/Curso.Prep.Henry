// No cambies los nombres de las funciones.


function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
 /* const newArray = [];
  for(let i = 0; i < array.length; i++){
    newArray.push(array[i] + 1);
  }
  return newArray;*/

  //CON UN WHILE
  /*const sumaUno =[];
  let i = 0;
  while(i < array.length){
    sumaUno.push(array[i] +1);
    i++;
  }
  return sumaUno;*/

  //CON UN FOREACH
  /*let sumanum = [];
   array.forEach(element => {
    sumanum.push(element + 1);
  });
  return sumanum;*/

  //CON UN MAP Y UNA FUNCTION FLECHA
  return arr = array.map(value => value +1 );
  
  //CON UN MAP FUNCTION SIMPLE
  /*return mapa3 = array.map(function(value){
    return value +1;
  });*/
  
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  array.push(elemento);
  return array;

  //array[array.length] = elemento;
  //return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento); 
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return arrayFrases = palabras.join(" ");

  

}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  /*for(let i = 0; i < array.length; i++){
    if(array[i] === elemento){
      return true;
    }
  }
  return false;*/
 // let verdad = array.some(elem => elem === elemento);
  //return verdad;

  return array.some(elem => elem === elemento);

 
  

}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  /*let sumaDeNumeros = 0;
  for(let i = 0; i < numeros.length; i++){
    sumaDeNumeros += numeros[i];
  }
  return sumaDeNumeros;*/

  //return numeros.reduce(function(a, b){ return a + b; });

  return numeros.reduce((a, b) => a + b) 
  
  
  
 
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  return agregarNumeros(resultadosTest) / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  /*let elNumeroMasGrande = 0;
  for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > elNumeroMasGrande){
      elNumeroMasGrande = numeros[i];
    }
  }
  return elNumeroMasGrande;*/
  return grande = numeros.reduce((a, b) => a > b ? a : b);
  //return grande;

 

}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
 /*let nSuma = 1;
 if(arguments.length < 1)return 0;

 for(let i = 0; i < arguments.length; i++ ){
   nSuma = nSuma * arguments[i];
 }
 return nSuma;*/
 if(arguments.length < 1)return 0;
 const arg = [...arguments];
 return total = arg.reduce((a, b) => a * b);
}
//multiplicarArgumentos(2, 3, 5)



function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  /*var suma = 0;
  for(var i = 0; i < arreglo.length; i++){
    if(arreglo[i] > 18){
      suma+= 1;

    }
  }
  return suma;*/

 const result = arreglo.filter(unidad => unidad > 18);
 return result.length;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí 
  /*if(numeroDeDia === 1 || numeroDeDia === 7){
    return "Es fin de semana";
  } else{
    return "Es dia Laboral";
  } */

  // if(numeroDeDia === 1 || numeroDeDia === 7) return "Es fin de semana";
  // return "Es dia Laboral";

  return num = numeroDeDia === 1 || numeroDeDia === 7 ? "Es fin de semana" : "Es dia Laboral";
  //return num;
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  /*let partir = String(n);
  if(partir[0] == 9){
    return true;
  }else{
    return false;
  }*/

  // operador ternario:
  //let partir = String(n);
  //return  empieza = partir[0] == 9 ? true : false;
  
  let partir = String(n); 
  return partir[0] == 9 ? true : false;

  //if(partir[0] == 9) return true; 
  //return false;
 // return partir[0] == 9 ? true : false;


  
  
  
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  /*for(let i = 0; i < arreglo.length; i++){
    if(arreglo[0] !== arreglo[i] ){
      return false;
    }
  }
  return true;*/
  return es = arreglo.every(elem => elem === arreglo[0]);
  //return verdad;

} 




function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
   
  /*let newArray = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
      newArray.push(array[i]);
    }
  }
  return estan = newArray.length === 3 ? newArray : "No se encontraron los meses pedidos";
  
  */
  const meses = array.filter(mes => mes ==="Enero" || mes === "Marzo" || mes === "Noviembre")
  return estan = meses.length === 3 ? meses : "No se encontraron los meses pedidos";
  //return estan;

  /*if(newArray.length === 3){ 
    return newArray;
  }else{
    return "No se encontraron los meses pedidos"
  }*/

 


}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  /*const newArray7 = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] > 100){
      newArray7.push(array[i]);
    }
  }
  return newArray7;*/
 return result = array.filter( arr => arr > 100);
 //return result;


}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  const newArray10 =[];
  for(let i = 0; i < 10; i++){
    numero = numero + 2;
    if(numero === i){
      break;//sale del for
    }else{
      newArray10.push(numero);
    }
  }

  return n = newArray10.length < 10 ? "Se interrumpió la ejecución": newArray10;
  
  /*if(newArray10.length < 10){
    return "Se interrumpió la ejecución";
  }else{
    return newArray10;
  }*/
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  const arrayNew = [];
  for(let i = 0; i < 10; i++){
    if(i === 5){
      continue;
    }else{
      numero = numero + 2;
      arrayNew.push(numero);
    }
  }
  return arrayNew;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
