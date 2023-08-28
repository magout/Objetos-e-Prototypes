// defineProperty - > definePropeties

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque, // Valor
        writable: true, // Pode alterar o valor
        configurable: false // Reconfigurar a chave
    });
};


const p1 = new Produto('Camiseta', 20, 3)
console.log(p1)

for (let chave in p1) {
    console.log(chave)
}