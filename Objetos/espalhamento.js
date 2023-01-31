const cliente = {
    name: 'Antonio',
    idade: 24,
    email: 'a@gmail.com',
    telefone: ['92992575672','92993229911'],
}

cliente.enderecos = {
    rua: 'Rua do Ipê',
    numero: '06',
    bairro: 'Coroado',
    apartamento: true,
}

function ligar (telefone1, telefone2){
    console.log('ligando para; ', telefone1);
    console.log('ligando para: ', telefone2);

}
//1° forma
// ligar(cliente.telefone[0], cliente.telefone[1]);

//2° forma usando spread(espalhamento)
ligar(...cliente.telefone);


//////////////////////////////////////////////////////////////////////
const encomenda = {

    destinatario: cliente.name,
    ...cliente.enderecos,
}

console.log(encomenda);