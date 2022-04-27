{ 
    { 
        { 
            { 
                var sera = 'Será???' //var pode ser lido fora do escopo
            } 
        } 
    } 
}
console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
//console.log(local)