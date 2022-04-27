const funcaoDaSorte = (sorteio) => {
    sorteado = ((Math.random(10)*10).toFixed(0))
    return (sorteio == sorteado) ? `Parabéns! O número sorteado foi o ${sorteado}` : `Que pena! O número sorteado foi o ${sorteado}`
}

console.log(funcaoDaSorte(10)) // retornará "Parabéns! O número sorteado foi o 10"
console.log(funcaoDaSorte(5)) // retornará "Que pena! O número sorteado foi o 3"
console.log(funcaoDaSorte(5)) // retornará "Que pena! O número sorteado foi o 1"