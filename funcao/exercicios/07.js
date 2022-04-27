function Bhaskara(a, b, c) {
    let delta = b**2-4*a*c
    return `delta = ${b**2-4*a*c} x1=${(-b+Math.sqrt(delta))/2} x2=${(-b-Math.sqrt(delta))/2}`
}

console.log(Bhaskara(1, -10, 24))
console.log(Bhaskara(1, 6, -48))
console.log(Bhaskara(1, 8, 7))
console.log(Bhaskara(-1, -12, -35))