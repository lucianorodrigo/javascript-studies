const buscarPalavrasSemelhantes = (inicio, palavras) => {
    return palavras.filter(palavra => palavra.includes(inicio))
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])) // retornará ["programação", "profissional"]
console.log(buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"])) // retornará ["javascript", "java"]