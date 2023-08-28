const produto = {nome: 'Caneca', preco: 1.9, material: 'Ferro'};

for (let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1])
}

console.log(Object.values(produto))