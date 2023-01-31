const pessoa = {
    nome: 'Antonio',
    idade: '24',
    email: 'antonio@gmail.com',
    telefone: '(92)99257-5672',

}

//Adicionando objeto endereço como atributo do objeto pessoa
pessoa.endereco = {
    cep: '69082714',
    rua: 'rua bispo de praga',
    numero: '6',
    bairro: 'Alvorada',
}

//adicionando nova propriedade ao objeto endereco que está dentro do objeto pessoa
pessoa.endereco.uf = 'AM';

console.log(pessoa);