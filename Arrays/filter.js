const nomes = ['Alex', 'Kevin', 'Mario', 'Fernando'];
const notas = [10, 5, 6, 7.5];

const reprovados = nomes.filter((i,nota) => {
    return notas[nota] < 7;
});

const aprovados = nomes.filter((i,nota) => {
    return notas[nota] >= 7;
});

console.log('Os alunos aprovados são: ', aprovados);
console.log('Os alunos reprovados são: ', reprovados);