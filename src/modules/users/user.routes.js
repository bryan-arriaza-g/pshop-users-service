const { Router } = require('express');
const UserController = require('./user.controller');

const router = Router();

router.get('/', UserController.find);
router.get('/:userId', UserController.findById);
router.post('/', UserController.create);
router.put('/:userId', UserController.update);
router.delete('/:userId', UserController.remove);

module.exports = router;
