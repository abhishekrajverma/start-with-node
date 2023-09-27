const express = require('express');

const router = express.Router();
const usersController = require('../controllers/users_controller');

router.get('/profile', usersController.profile);
router.get('/name',usersController.name );
router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);




module.exports = router;