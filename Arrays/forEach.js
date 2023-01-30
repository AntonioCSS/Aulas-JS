const notas = [10, 6.5, 4, 8];

let somadasnotas = 0;

notas.forEach(function (nota,i){
    somadasnotas += nota;
    console.log(i);
});

console.log(somadasnotas)