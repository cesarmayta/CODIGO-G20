const {Router} = require('express')
const router = Router()

const {getAll,create,getOne} = require('../controllers/category.controller')

router.route('/')
.get(getAll)
.post(create)

router.route('/:id')
.get(getOne)


module.exports = router