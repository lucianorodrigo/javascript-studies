const _ = require('lodash')
setInterval(() => console.log(_.random(1, 1000)), 2000)

// setInterval(() => console.log(_.random(1, 1000)), 2000) //cuidado: loop infinito 