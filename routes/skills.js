var express = require('express');
var router = express.Router();

var skillsCtrl = require('../controllers/skills')

router.get('/', skillsCtrl.index);

router.get('/new', skillsCtrl.addNew)

router.get('/:id', skillsCtrl.getOne);

router.post('/', skillsCtrl.createNew)

router.delete('/:id', skillsCtrl.remove);

router.get('/edit/:id', skillsCtrl.edit)

module.exports = router;
