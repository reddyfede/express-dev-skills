const skills = [
    { id: 1, skill: "First Skill", desc: 'Very long text to describe the First Skill', rank: 10 },
    { id: 2, skill: "Second Skill", desc: 'Very long text to describe the Second Skill', rank: 7 },
    { id: 3, skill: "Third Skill", desc: 'Very long text to describe the Third Skill', rank: 6 },
    { id: 4, skill: "Fourth Skill", desc: 'Very long text to describe the Fourth Skill', rank: 9 },
];

module.exports = {
    getAll,
    getOne,
    addOne,
    deleteOne,
    editOne,
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

function editOne(id, skill) {
    const skillPos = skills.findIndex(function (s) {
        return s.id === id
    })
    console.log(skillPos, skill)
    skills[skillPos].rank = skill.rank
    skills[skillPos].desc = skill.desc
}