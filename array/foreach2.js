Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this, 'meu estilo')
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice, array, x) {
    console.log(`${indice +1}) ${nome}`)
    console.log(array)
    console.log('x')
    console.log(x)
})