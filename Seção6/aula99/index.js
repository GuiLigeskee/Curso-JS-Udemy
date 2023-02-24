// Polimorfismo (22/02/2023);

// Classe = Função construtora;

function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
};
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

function CP(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
};
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log(`Saldo insulficiente: R$${this.saldo}`)
        return;
    };

    this.saldo -= valor;
    this.verSaldo()
};
Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo()
};
Conta.prototype.verSaldo = function () {
    console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
};


CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insulficiente: R$${this.saldo}`)
        return;
    };

    this.saldo -= valor;
    this.verSaldo()
};

// const cc = new CC(11, 22, 2, 100);
// cc.depositar(10);
// cc.sacar(90)

const cp = new CP(22, 33, 0, 120);
cp.depositar(100);
cp.sacar(100);
