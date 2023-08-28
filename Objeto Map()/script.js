const pessoas = [
    {id: 3, nome: 'João'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Hobson'}

]

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const {id} = pessoa;
//     novasPessoas[id] = { ...pessoa }
// }

const novasPessoas = new Map(); // Criar map
for (const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas.set(id,  { ...pessoa }) // Setar os valores no MAP
}

for (const [identifier, {id, nome}] of novasPessoas) {
    console.log(identifier, id, nome)
}

for (const pessoa of novasPessoas.values()) {
    console.log(pessoa)
}


// console.log(novasPessoas.get(2)) // Obter valores do map