const {Router} = require('express')
const router = Router()

const {create,getAll,getByCourseId,updateOne,deleteOne} = require('../controllers/video.controller')

router.route('/')
    .post(create)
    .get(getAll)

router.route('/:id')
.put(updateOne)
.delete(deleteOne)

router.route('/course/:id')
.get(getByCourseId)

module.exports = router