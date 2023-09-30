const express = require('express');
const passport = require('passport');

const router = express.Router();
const usersController = require('../controllers/users_controller');

router.get('/profile',passport.checkAuthentication ,usersController.profile);
router.get('/name', usersController.name);
router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);

router.get('/sign-out', usersController.destroySession);

router.post('/create', usersController.create);
// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {
        failureRedirect: '/sign-in',
        
    }
), usersController.createSession)




module.exports = router;