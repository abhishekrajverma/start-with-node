const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('../controllers/users_controller');

router.get('/tic-tac-toe', usersController.tic);

module.exports = router;