const multiplicar = (numero, multiplicador) => {
    let resultado = 0
    if (numero == 0 || multiplicador == 0) {
        return resultado
    } else {
        resultado = numero + multiplicar(numero, multiplicador-1)
        return resultado
    }
}

console.log(multiplicar(5, 5)) // retornarĂ¡ 25
console.log(multiplicar(0, 7)) // retornarĂ¡ 0
console.log(multiplicar(2, 7))