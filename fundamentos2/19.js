const calcularMedia = (valor) => {
    let reduced = valor.reduce((total, valor) => ((total + valor))) 
    return reduced/valor.length
}

console.log(calcularMedia([0, 10])) // retornarĂ¡ 5
console.log(calcularMedia([1, 2, 3, 4, 5])) // retornarĂ¡ 3