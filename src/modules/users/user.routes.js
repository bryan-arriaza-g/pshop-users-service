const { Router } = require('express');
const UserController = require('./user.controller');

const router = Router();

router.get('/', UserController.find);

module.exports = router;
