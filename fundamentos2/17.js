function somarNumeros(numeros) {
    const quantidadeDeNumeros = numeros.length
    return (quantidadeDeNumeros === 0) ? 0 : numeros[0] + somarNumeros(numeros.slice(1))
}

console.log(somarNumeros([10, 10, 10])) // retornarĂ¡ 30
console.log(somarNumeros([15, 15, 15, 15])) // retornarĂ¡ 60