const express = require('express')
const router = express.Router();

const musicController= require('../controllers/musicController');

router.get('/', musicController);
router.post('/add', musicController.save);
router.get('/delete/:id', musicController.delete);
router.get('/update/:id', musicController.edit);
router.post('/update/:id', musicController.update);



module.exports = router;