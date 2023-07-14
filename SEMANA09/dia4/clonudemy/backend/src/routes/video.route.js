const {Router} = require('express')
const router = Router()

const {create,getAll,getByCourseId} = require('../controllers/video.controller')

router.route('/')
    .post(create)
    .get(getAll)

router.route('/course/:id')
.get(getByCourseId)

module.exports = router