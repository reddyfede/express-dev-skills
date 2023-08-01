module.exports = {
    index
}

const Skills = require('../models/skills')

function index(req,res){
    res.render('skills/index', {title: 'List of Skills', skills: Skills.getAll()})
}
