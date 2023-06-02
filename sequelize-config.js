const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'prakash0091', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;