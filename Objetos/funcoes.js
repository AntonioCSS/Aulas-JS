const cliente = {
    nome: 'Antonio',
    idade: 24,
    email: 'a@gmail.com',
    telefone: '(929925765672)',
    saldo: 300,
    efetuarPagmanto: function (valor){
        if (valor > this.saldo){
            console.log('Saldo insuficiente!')
        }else{
            this.saldo -= valor;
            console.log('Pagamento efetuado com sucesso. Novo Saldo: ', this.saldo)
        }
    }
}

cliente.efetuarPagmanto(30);

