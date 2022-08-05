const { User } = require('../models');

const userData = [
    {
        username: "example1",
        password: "password1"
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;