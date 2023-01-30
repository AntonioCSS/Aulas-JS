const notas = [10,6,7,5.5,10]

let soma = 0;

        //nota == cada elemento do array notas
for (let nota of notas){
    soma += nota;
    console.log(soma);
}

media = soma/notas.length;
console.log('a média final é: ',media);