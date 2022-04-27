const produtos = [
    { nome: 'Noteboo', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plático', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {
    return false
}))

const fragil = e => e.fragil // rettrorna sempre true pois é boolean
const caro = e => e.preco > 500

console.log(produtos.filter(fragil).filter(caro))