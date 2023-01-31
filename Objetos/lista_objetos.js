const pessoa = {
    nome: 'Antonio',
    idade: '24',
    email: 'antonio@gmail.com',
    telefone: '(92)99257-5672',

}

//objeto endereco vira uma lista(array)
pessoa.endereco = [{
    apartamento: true,
    rua: 'rua bispo de praga',
    numero: '6',
    bairro: 'Alvorada',
}];

//Adiciona nova entrada na lista com o método push
pessoa.endereco.push({
    apartamento: false,
    rua: 'rua sabiá',
    numero: '10',
    bairro: 'Coroado',
})

//filtro para listar apenas os apartamentos(true)
const apartamentos = pessoa.endereco.filter(
    (endereco) => endereco.apartamento === true
)

//filtro para listar apenas os não apartamentos(false)
const naoApartamentos = pessoa.endereco.filter(
    (endereco) => endereco.apartamento === false
)

console.log(pessoa.endereco)
// console.log(naoApartamentos)
// console.log(apartamentos)


