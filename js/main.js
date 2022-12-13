//Ejercicio #1
//Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista. 
//Ejemplo del arreglo : [3, 5, 7, 1, 6]
/*
Numeros
+------------------+
|       3          | 0
+------------------+ 
|       5          | 1 
+------------------+
|       7          | 2
+------------------+
|       1          | 3
+------------------+
|       6          | 4
+------------------+
|      8           | 5
+------------------+
|       9          | 6
+------------------+
*/
let NumerosM=document.getElementById("NumerosM")
let Numeros = [3, 5, 7, 1, 6, 8,9];
console.log(Numeros.length); //7

function Mayor(Numeros){
    if (toString.call(Numeros)){
        return null;
    }
 if(!Numeros.every(e => typeof e == "nunber")){
    return null;
 }
 return Math.max.apply(null, Numeros)
}
console.log(Mayor(3, 5, 7, 1, 6, 8,9)) //Numero mayor9
console.log(Mayor(15)) //15 null



//Ejercicio #2
//María llega a su entrevista de trabajo para el rol de Desarrollador Junior y se le 
//pide que resuelva este problema: Dada una lista de números
// [-1, 3, 4, 2, 6], escribe una función en javascript para calcular el número más pequeño.


/*
Numeros
+------------------+
|       1          | 0
+------------------+ 
|       3          | 1 
+------------------+
|       4          | 2
+------------------+
|       2          | 3
+------------------+
|       6          | 4
+------------------+
|      7           | 5
+------------------+
|       8          | 6
+------------------+
*/

let NumerosP=document.getElementById("NumerosP")
let NumerosPQ = [1, 3, 4, 2, 6, 7,8];
console.log(NumerosPQ.length); //7

function Menor (NumerosPQ){
    if (toString.call(NumerosPQ)){
        return null;
    }
    if (!NumerosPQ.every(e => typeof e == "number"));{
        return null;
    }
    return Math.min.apply(null, NumerosPQ);
}
console.log(Menor(1, 3, 4, 2, 6, 7,8)) //numero menor 1
console.log(Menor(10)) //10 Null


//Ejercicio #3
//Escribir una función que permita saber si un número se repite dentro de un arreglo.
//Blockquote Casos de prueba:
//Caso 1: Resultado esperado: El número 5 se encuentra más de una vez [1, 22, 5, 17, 10, 5, 40, 5]
//Caso 2: Resultado esperado: El número 7 se encuentra más de una vez [7, 41, 5, 7, 10, 13, 2]
//Caso 3: Resultado esperado: No hay números repetidos [1, 22, 5, 14, 24, 31, 27, 15, 105]
 
/*
//Caso 1: Resultado esperado: El número 5 se encuentra más de una vez [1, 22, 5, 17, 10, 5, 40, 5
+------------------+
|       1          | 0
+------------------+ 
|      22          | 1 
+------------------+
|       5          | 2
+------------------+
|       17         | 3
+------------------+
|       10         | 4
+------------------+
|      5           | 5
+------------------+
|      40          | 6
+------------------+
|       5          | 7
+------------------+
*/
let NumerosR1=document.getElementById("NumerosR1")
let NumerosRT = [1, 22, 5, 17, 10, 5,40, 5];
console.log(Numeros.length); //8
function NumeroRepetido1(arreglo){
    if (arreglo instanceof Array){
        for(let i =0;i < arreglo.length - 1;++1){
            if(arreglo.slice(i +1).indexOf(arreglo[i]) !== -1){
                return true;
            }
        }
        return false;
    }else{
        throw TypeError("El argumento de la funcion debe ser un arreglo");
    }
}

try{
    console.log(NumeroRepetido1([1, 22, 5, 17, 10, 5,40, 5]));//true
    } catch (e) {
        console.log(`Error: ${e.message}`);
    }
    
    console.log();
    try{
        console.log(NumeroRepetido1([5]));  // True
        } catch (e) {
            console.log(`Error: ${e.message}`);
        }
    try{
        console.log(NumeroRepetido1([1,22,17,10,40]));  // sale falso
        } catch (e) {
            console.log(`Error: ${e.message}`);
        }


        //Caso 2: Resultado esperado: El número 7 se encuentra más de una vez 
        //[7, 41, 5, 7, 10, 13, 2]
        /*
 ------------------+
|      41          | 0
+------------------+ 
|      5           | 1 
+------------------+
|       7          | 2
+------------------+
|       10         | 3
+------------------+
|       13         | 4
+------------------+
|      2           | 5
+------------------+
|       7          | 6
+------------------+
*/
let NumerosR2=document.getElementById("NumerosR2")
let NumerosRT2 = [41, 5, 7, 10, 13,2 ,7];
console.log(Numeros.length); //7
function NumeroRepetido2(arreglo){
    if (arreglo instanceof Array){
        for(let i =0;i < arreglo.length - 1;++1){
            if(arreglo.slice(i +1).indexOf(arreglo[i]) !== -1){
                return true;
            }
        }
        return false;
    }else{
        throw TypeError("El argumento de la funcion debe ser un arreglo");
    }
}
try{
    console.log(NumeroRepetido1([41, 5, 7, 10, 13,2 ,7]));//true
    } catch (e) {
        console.log(`Error: ${e.message}`);
    }
    
    console.log();
    try{
        console.log(NumeroRepetido1([7]));  // True
        } catch (e) {
            console.log(`Error: ${e.message}`);
        }
    try{
        console.log(NumeroRepetido1([41, 5, 10, 13,2 ]));  // sale falso
        } catch (e) 
            {console.log(`Error: ${e.message}`);
        }
