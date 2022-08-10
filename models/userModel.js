const { connection } = require('../utils/userUtilDb');
const { Sequelize } = require('sequelize');


exports.User = connection.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userName: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false },


});

exports.Usertoken = connection.define('usertoken', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userToken: { type: Sequelize.STRING, allowNull: false },

});