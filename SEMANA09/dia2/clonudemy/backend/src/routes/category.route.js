const {Router} = require('express')
const router = Router()

const {getAll} = require('../controllers/category.controller')

router.route('/')
.get(getAll)

module.exports = router