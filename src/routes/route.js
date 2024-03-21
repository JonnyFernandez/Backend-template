// aca llegaran todos las reques, dependiendo de su url la redireciona a su destino

// const { Router } = require('express')  //instalar express 
const auth = require('./auth.routes')
const character = require('../routes/character.routes')
const routeDB = require('../routes/myChars.routes')
const fav = require('../routes/fav.routes')


const route = Router()

route.use('/char', character)  //documentada
route.use('/auth', auth)       //documentada
route.use('/mychars', routeDB) //documentada
route.use('/fav', fav)


module.exports = route