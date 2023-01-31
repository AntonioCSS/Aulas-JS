const objPessoa ={
    nome: 'Antonio',
    cpf: '02127297210',
}

//Alterando valor da propriedade nome do objeto.
objPessoa.nome = 'Antonio Carlos';
//Adicionando nova propriedade.
objPessoa.status = 'Aprovado';
objPessoa.excluirpropriedade = 'excluir';
//Deletar propriedade do obj.
delete objPessoa.excluirpropriedade;
console.log(objPessoa);