const numeros = [1,1,2,2,3,3,4,4,5,5,5]

//Set não permite valores repetidos
const novoSet = new Set(numeros);

const novosNumeros = [...novoSet];

console.log(novosNumeros);
