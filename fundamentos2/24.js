const contarCaractere = (letra, daaletra) => {
    return [...daaletra].filter(caractere => caractere === letra).length
}

console.log(contarCaractere("r", "A sorte favorece os audazes")) // retornarĂ¡ 2
console.log(contarCaractere("c", "Conhece-te a ti mesmo")) // retornarĂ¡ 1