const express = require('express');
const router = express.Router();

const postController = require('../controllers/post_controller');

router.post('/feedback',postController.create);

module.exports = router;