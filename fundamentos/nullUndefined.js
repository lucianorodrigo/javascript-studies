let valor

console.log(valor)

valor = null
console.log(valor)
//console.log(valor.toScting) //erro pois null não pode ser passado para o tipo string

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined
console.log(!!produto.preco)
console.log(produto)
//delete produto.preco
console.log(produto)

produto.preco = null // representação de numero null quando necessario
console.log(!!produto.preco)
console.log(produto)