const {Router} = require('express')
const router = Router()

const {getAll,create,getOne,updateOne,deleteOne} = require('../controllers/category.controller')

router.route('/')
.get(getAll)
.post(create)

router.route('/:id')
.get(getOne)
.put(updateOne)
.delete(deleteOne)


module.exports = router