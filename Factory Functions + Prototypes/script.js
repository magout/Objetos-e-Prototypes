// 

const falar = {
    falar() {
        console.log(`${this.nome} Esta falando`)
    }
} 

const comer = {
    comer() {
        console.log(`${this.nome} Esta comendo`)
    }
}

const beber = {
    beber() {
        console.log(`${this.nome} Esta bebendo`)
    },
}

const pessoaPrototype = { ...falar, ...comer, ...beber } // Usar esse metodo onde quiser


function criaPessoa(nome, sobrenome) {
    

    return Object.create(pessoaPrototype, {
         nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
};

   
 
 
     
 
const p1 = criaPessoa('Matheus', 'Magoga')
const p2 = criaPessoa('Foltop', 'Fe')
console.log(p1)
console.log(p2)
