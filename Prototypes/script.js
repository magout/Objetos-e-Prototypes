



function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome
}

// Prototype
Pessoa.prototype.estouAqui = 'Pessoa'

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome
}

// [[Prototype]] // Nessa parte temos o proto e o objeto dentro, Pessoa.prototype

// : 
// Object
// estouAqui
// : 
// "Pessoa"
// constructor
// : 
// ƒ Pessoa(nome, sobrenome)
// [[Prototype]]
// : 
// Object

// Instancia 
const pessoa1 = new Pessoa('Maria', 'Severino') // <- Pessoa = Função construtoria
const pessoa2 = new Pessoa('Matheus', 'Magoga') // <- Pessoa = Função construtoria

const data = new Date(); // 

console.dir(pessoa1)
console.dir(pessoa2)
console.dir(data); // Nada dentro do objeto data
// Temos somente a propriedade proto, que realiza todas as outras funções

