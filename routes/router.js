const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller')

router.get('/', controller.homePage)
router.get('/article/:idParams', controller.articlePage)


module.exports = router;