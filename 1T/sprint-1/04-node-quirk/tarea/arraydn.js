# Actividad 1:
# 	• Eliminar todos los elementos inferiores a 18 de un array de números

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < 18; i++) {
  numeros.splice(0, i);
}

console.log(numeros);