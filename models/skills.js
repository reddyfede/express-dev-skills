const skills = [
    {id: 1, skill: "skill 1", rank: 10},
    {id: 2, skill: "skill 2", rank: 7},
    {id: 3, skill: "skill 3", rank: 6},
    {id: 4, skill: "skill 4", rank: 9},
];

module.exports = {
    getAll,
    getOne,
    addOne,
};

function getAll() {
    return skills;
};

function getOne(id) {
    return skills.find(skill => skill.id === Number(id));
};

function addOne(skill){
    skill.id = Date.now() % 1000000
    skills.push(skill)
}