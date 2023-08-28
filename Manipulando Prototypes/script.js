function Produto(nome, preco) {
    this.nome = nome,
    this.preco = preco;
}


Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * percentual / 100)
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * percentual / 100)
};

const p1 = new Produto('Camisa', 100);

// Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10)

const p3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 34
    },  
    tamanho2: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 56
    }
});


