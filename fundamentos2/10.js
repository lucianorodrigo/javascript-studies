const simboloMais = (quantidade) => {
    let retorno = ""
    for(let i = 0; i < quantidade; i++) {
        retorno += "+"
    }
    return retorno
}
/*
function simboloMais(quantidade) {
return Array(quantidade).fill('+').join('')
}
*/
console.log(simboloMais(2)) // retornará "++"
console.log(simboloMais(4)) // retornará "++++"