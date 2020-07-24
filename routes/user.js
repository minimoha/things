const express   = require('express');
const router    = express.Router();

const userCtrl  = require('../controllers/user');

router.post('/login', userCtrl.login);
router.post('/signup', userCtrl.signup);
//router.get('/:id', userCtrl.getOneThing);
//router.put('/:id', userCtrl.modifyThing);
//router.delete('/:id', userCtrl.deleteThing);

module.exports = router;