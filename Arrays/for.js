// const numeros = [100,200,300,400,500,600];
//
// for (let indice = 0; indice<numeros.length; indice++){
//     console.log(numeros[indice])
// }


const notas = [10,6,7.5,5];

let soma = 0;

for(let i = 0; i < notas.length; i++){
    //soma com anterior
    soma += notas[i];
    console.log(soma);
}

console.log('a media total das notas é ', soma/notas.length)