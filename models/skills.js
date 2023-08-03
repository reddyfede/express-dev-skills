const skills = [
    { id: 1, skill: "First skill", rank: 10 },
    { id: 2, skill: "Second skill", rank: 7 },
    { id: 3, skill: "Third skill", rank: 6 },
    { id: 4, skill: "Fourth skill", rank: 9 },
];

module.exports = {
    getAll,
    getOne,
    addOne,
    deleteOne,
};

function getAll() {
    return skills;
};

function getOne(id) {
    return skills.find(skill => skill.id === Number(id));
};

function addOne(skill) {
    skill.id = Date.now() % 1000000
    skills.push(skill)
}

function deleteOne(id) {
    const skillPos = skills.findIndex(function (skill) {
        return skill.id === id
    })
    skills.splice(skillPos, 1)
}