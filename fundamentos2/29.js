const segundoMaior = (lista) => {
    let ordenada = lista.sort((a, b) => b - a)
    return ordenada[1]
}
console.log(segundoMaior([12, 16, 1, 5])) // retornarĂ¡ 12
console.log(segundoMaior([8, 4, 5, 6])) // retornarĂ¡ 6