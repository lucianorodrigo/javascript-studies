const maiorOuIgual = (primeiro, segundo) => {
    console.log(primeiro <= segundo)
}
function maiorOuIgual(primeiro, segundo) {
    if(typeof primeiro != typeof segundo) return false
    return primeiro >= segundo
}

maiorOuIgual(0, 0) // retornarĂ¡ true
maiorOuIgual(0, "0") // retornarĂ¡ false
maiorOuIgual(5, 1) // retornarĂ¡ false