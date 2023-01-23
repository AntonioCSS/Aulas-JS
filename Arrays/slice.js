//Cada sala deve conter 10 alunos

const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre',
    'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];


//Slice não altera diretamente o array por isso cria-se uma const
                                //ultimo numero não entra nos slice, pór isso 10
// const sala1 = alunos.slice(0,10);
                                //qnd. posto apenas o 1° num. o segundo vai até o final do array
// const sala2 = alunos.slice(10);

//ou
const sala1 = alunos.slice(0,(alunos.length/2));
const sala2 = alunos.slice(alunos.length/2);

// console.log(alunos);

console.log(sala1);
console.log(sala2);

