/// import User from models
const { User } = require('../models');

const userData =
[
  {
    "username": "APrince1",
    "email": "ap23@gmail.com",
    "password": "password123"
  },
  {
    "username": "Ally2",
    "email": "Ally@yahoo.com",
    "password": "password1"
  },
  {
    "username": "Lalalove3",
    "email": "Lala@gmail.com",
    "password": "thisispw123"
  },
  {
    "username": "lucas4",
    "email": "lucas@gmail.com",
    "password": "PWD123"
  },
  {
    "username": "laura5",
    "email": "laura@gmail.com",
    "password": "passcode1234"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;