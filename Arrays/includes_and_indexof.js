const  alunos = ['Antonio','Lucas','Amanda','Miguel'];
const media = [10,7,6,5.5];

//matriz
const relacao = [alunos, media];

function exibirNotas(aluno){
    if (relacao[0].includes(aluno)){
        const alunos = relacao[0];
        const media = relacao[1];

        const indice = alunos.indexOf(aluno);
        const mediaAluno = media[indice];

        console.log('A media do(a) Aluno(a) ',aluno, 'é:',mediaAluno);
    }else{
        console.log('Aluno(a) não encontrado');
    }
}

exibirNotas('Amanda');