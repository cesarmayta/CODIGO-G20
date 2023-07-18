const {Router} = require('express')
const router = Router()

const {verifyToken} = require('../middlewares/auth.handler')

const {create,auth,getOne,getAll,updateOne} = require('../controllers/user.controller')

router.route('/')
.post(create)
.get(verifyToken,getAll)

router.route('/:id')
.get(verifyToken,getOne)
.put(verifyToken,updateOne)

router.route('/auth')
.post(auth)

module.exports = router