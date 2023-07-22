const {Router} = require('express')
const router = Router()

const passport = require('../libs/passport.lib');

const {authGoogle} = require('../controllers/user.controller')

router.route('/callback')
.get(passport.authenticate('google',{failureRedirect:'/failed'}),
    function(req,res){
        res.json({
            'email':req.user.emails[0].value,
            "id":req.user.id
        })
    }
)

router.route('/failed')
.get((req, res) => res.status(401).json({
    status:true,
    content:'no se puedo loguear con google'
    }))


router.route('/auth')
.get(passport.authenticate('google',{scope: ['profile', 'email']}))

module.exports = router