const { Router } = require('express')
const handler = require('../handlers/prodHandler')

const prod = Router()

prod.get('/', [handler.getProd])
prod.post('/', [handler.createProd])
prod.get('/code/:code', [handler.getProdByCode])
prod.get('/:id', [handler.getProdById])
prod.put('/:id', [handler.updateProd])
prod.delete('/:id', [handler.deleteProd])



module.exports = prod