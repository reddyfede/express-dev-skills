module.exports = {
    index,
    getOne : show,
    addNew
}

const Skills = require('../models/skills')

function index(req,res){
    res.render('skills/index', {title: 'List of Skills', skills: Skills.getAll()})
}

function show(req,res){
    const id = req.params.id
    const contextObject = {
        title : "Skill Page",
        skill : Skills.getOne(id)
    }
    res.render('skills/show', contextObject)
}

function addNew(req,res){
    res.render('skills/new', {title: 'New Skill'})
}