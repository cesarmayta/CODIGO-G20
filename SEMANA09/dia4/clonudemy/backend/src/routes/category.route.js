const {Router} = require('express')
const router = Router()

const {verifyToken} = require('../middlewares/auth.handler')

const {getAll,create,getOne,updateOne,deleteOne} = require('../controllers/category.controller')

router.route('/')
.get(getAll)
.post(verifyToken,create)

router.route('/:id')
.get(verifyToken,getOne)
.put(verifyToken,updateOne)
.delete(verifyToken,deleteOne)


module.exports = router