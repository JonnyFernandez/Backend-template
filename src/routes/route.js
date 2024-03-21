// aca llegaran todos las reques, dependiendo de su url la redireciona a su destino

const { Router } = require('express')  //instalar express 
const auth = require('./auth.routes')


const route = Router()

route.use('/auth', auth)



module.exports = route