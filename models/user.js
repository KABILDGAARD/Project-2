  
const sequelize = require('sequelize')
const connection = require('../config/connection');

let User = connection.define("User", {
    // Giving the Users model a name of type STRING
    username: sequelize.STRING,
    password: sequelize.STRING,
    name: sequelize.STRING,
    },
    location: sequelize.STRING,
  })

module.exports = User;