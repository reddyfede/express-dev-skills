const skills = [
    {id: 1, skill: "skill 1", rank: "10/10"},
    {id: 2, skill: "skill 2", rank: "10/10"},
    {id: 3, skill: "skill 3", rank: "10/10"},
    {id: 4, skill: "skill 4", rank: "10/10"},
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
};

function getOne(id) {
    return skills.find(skill => skill.id === Number(id));
};