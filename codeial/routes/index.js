const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);

//for any further routes, access from here
//syntax- router.use('/routerName', './routerFile')
router.use('/users', require('./users'));

console.log("hello from routes");




module.exports = router;