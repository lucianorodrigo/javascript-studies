function jurosSimples(capital, taxa, tempo) {
    return `${capital*(1+taxa)*tempo}`
}

function jurosComposto(capital, taxa, tempo) {
    return `${capital*(1+taxa)**(tempo)}`
}

console.log(jurosSimples(100,0.1,10))
console.log(jurosComposto(100,0.1,10))