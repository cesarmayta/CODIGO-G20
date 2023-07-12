const {Router} = require('express')
const router = Router()

const {getAll,create,getOne,update} = require('../controllers/category.controller')

router.route('/')
.get(getAll)
.post(create)

router.route('/:id')
.get(getOne)
.put(update)


module.exports = router