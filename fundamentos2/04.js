const nomeDoMes = (mes) => {
    switch(mes){
        case 1:
            console.log('janeiro')
            break
        case 4:
            console.log('abril')
            break
    }
}
function receberNomeDoMes(numero) {
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
    'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return mapeamento[--numero];
    }
nomeDoMes(1) // retornará "janeiro"
nomeDoMes(4) // retornará "abril"