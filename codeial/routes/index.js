const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
const passport = require('passport');

router.get('/',passport.checkAuthentication,homeController.home);
router.get('/home1',homeController.home1);

//for any further routes, access from here
//syntax- router.use('/routerName', './routerFile')
router.use('/users', require('./users'));
router.use('/post', require('./post'));

console.log("hello from routes");

module.exports = router;