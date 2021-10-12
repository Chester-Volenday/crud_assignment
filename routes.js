const express = require('express');
const users = require('./controllers/users');
const router = express.Router();

router.get('/', users.index);
router.get('/delete_user', users.delete_user);

router.post('/new_user', users.new_user);
router.post('/user_info', users.user_info);
router.post('/update_user', users.update_user);

module.exports = router;