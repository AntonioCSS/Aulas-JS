const cliente = {
    nome: 'Antonio',
    idade: '24',
    email: 'a@gmail.com',
    telefone: ['(92)992575672','(92)992575644']
}

cliente.endereco = [
    {
        rua: 'rua dos ingleses',
        numero: 6,
        bairro: 'Coroado 4',
        cep: '690827833',
    }
]

//laço for in -> para cada propriedade em cliente faça...
for (let chave in cliente){
    console.log('A propriedade ', chave, 'tem valor: ', cliente[chave]);
}