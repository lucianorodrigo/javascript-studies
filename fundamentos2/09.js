/*const repetir = (variado, repeteco) => {
    let array
    if(repeteco > 0){
        return variado + variado
        repetir(variado, repeteco--)
    }
}*/

function repetir(item, quantidade) {
    return Array(quantidade).fill(item)
    }

console.log(repetir("código", 2)) // retornará ["código", "código"]
console.log(repetir(7, 3)) // retornará [7, 7, 7]