//Utilizando os dois arrays abaixo, desestruture cada array com spread para clonar todos itens menos o primeiro
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

const [item1Arr1, ...array1] = arr
const [item1Arr2, ...array2] = arr2

const allArr = [...array1, ...array2]

console.log(allArr);