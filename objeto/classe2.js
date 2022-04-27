class Avo {
    constructor(sobrenome, aparencia = 'velho') {
        this.sobrenome = sobrenome
        this.aparencia = aparencia
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)
const pai = new Pai
console.log(pai)