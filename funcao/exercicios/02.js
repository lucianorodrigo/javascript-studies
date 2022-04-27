function triangulo(x, y, z) {
    if(x==y && y == z && x == z) {
        return 'triangulo equilátero'
    } else if (x == y || x == z || x == y) {
        return 'triangulo isóceles'
    } else if(x != y && y != z && x != z) {
        return 'triangulo escaleno'
    }
}

console.log(triangulo(1,3,1))