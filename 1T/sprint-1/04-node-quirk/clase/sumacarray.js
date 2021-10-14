# Actividad 2:
# 	• Sumar todos los números de un array con reduce


# Sin reduce

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}
console.log(suma);

# Con reduce

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const reducer = (accumulator, curr) => accumulator + curr;
console.log(numeros.reduce(reducer));