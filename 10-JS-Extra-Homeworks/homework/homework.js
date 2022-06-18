// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  /*let array = [];
  for(let key in objeto){
    array.push([key,objeto[key]]);
  }
  return array;*/

  return matriz = Object.entries(objeto);
  //return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  /*
  const letra = [];
  string.split("").forEach((item) => {
    if(!letra.includes(item)) letra.push(item);
  })
  const rep = {};
  letra.forEach((item) =>{
    let contador = 0;
    string.split("").forEach((items) => {
      if(item === items)contador+=1;
    })
    rep[item] = contador;
  })
  return rep;*/


  /*const respons = {};
  const array = string.split("");
  for(let i = 0; i < array.length; i++){
    !respons[array[i]] ? respons[array[i]] = 1 : respons[array[i]]++;
  }
  return respons;*/


  const numDV = {};
  const arr = string.split("");
  arr.forEach(e => {!numDV[e] ? numDV[e] = 1 : numDV[e]++;});
  return numDV;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  /*const string = [];
  let start = 0;
  for(let i = 0; i < s.length; i++){
    if(s[i] === s[i].toUpperCase()){
      string.splice(start, 0, s[i]);
      start++;
    }else{
      string.push(s[i]);
    }
  }*/
  
  //return string.join("");
  const mayus = []; const minus = []; 
  for(i = 0; i < s.length; i++)s[i] === s[i].toUpperCase() ? mayus.push(s[i]): minus.push(s[i]);
  return mayus.join("") + minus.join("");
}



function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
 // const stringC = [];
  /*for(let i = 0; i < str.length; i++){
     stringC.unshift(str[i])
  }
  return stringC.join("").split(" ").reverse().join(" ");
  */


  //const stringC = str.split("").reverse()
  //return stringC.join("").split(" ").reverse().join(" ");

  return strin = str.split("").reverse().join("").split(" ").reverse().join(" ");
 
  
  

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let reves = numero.toString().split("").reverse().join("");
  return revert = numero == reves ? "Es capicua" : "No es capicua";
  /*if(numero == reves){
    return "Es capicua";
  }else{
    return "No es capicua";
  }*/
 
}

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  /*let nuevaCadena = "";
  let eliminarLetras = ["a", "b", "c"];
  for(let i = 0; i < cadena.length; i++){
    if(eliminarLetras.includes(cadena[i])){
      continue;
    }else{
      nuevaCadena += cadena[i];
    }
  }
  return nuevaCadena;*/
  let nuevaCadena = "";
  for(let i = 0; i < cadena.length; i++){
  if(!(cadena[i] === "a" || cadena[i] === "b" || cadena[i] === "c")){
     nuevaCadena += cadena[i];
  }
  }
  return nuevaCadena;
 


}
  


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  /*let contador = 0;
  while(contador < arr.length){
    for (let i = 0; i < arr.length-1; i++){
      if(arr[i].length > arr[i+1].length){
        let guardado = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = guardado;
      }
      contador ++
    }
  }
  return arr;*/
  return array = arr.sort((a, b) => a.length - b.length);
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  /*const inter = [];
  for(let i = 0; i < arreglo1.length; i++){
    for(let j = 0; j < arreglo2.length; j++){
      if(arreglo1[i] === arreglo2[j]){
        inter.push(arreglo1[i])
      }
    }
  } 
  return inter;*/
  const arr = [];
  for(let i = 0; i < arreglo1.length; i++){
    if(arreglo2.includes(arreglo1[i]))
    arr.push(arreglo1[i]);
  }
  return arr;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

