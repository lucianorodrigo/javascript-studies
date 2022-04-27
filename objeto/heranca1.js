const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__ + 'zero')
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function Meubjeto() {}
console.log(typeof Object, typeof Meubjeto)
console.log(Object.prototype, Meubjeto.prototype)