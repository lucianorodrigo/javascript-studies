const removerPropriedade = (lista, aaremover) => {
    const copia = {...lista}
    delete copia[aaremover]
    return copia
}

console.log(removerPropriedade({a: 1, b: 2}, "a")) // retornará {b: 2}
console.log(removerPropriedade({
id: 20,
nome: "caneta",
descricao: "Não preenchido"
}, "descricao")) // retornará {id: 20, nome: "caneta"}