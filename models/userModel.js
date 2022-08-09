const { connection } = require('../utils/userUtilDb');
const { Sequelize } = require('sequelize');


exports.User = connection.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    keystore: { type: Sequelize.STRING, allowNull: false },
    secure: { type: Sequelize.STRING, allowNull: false },
    privatekey: { type: Sequelize.STRING, allowNull: false },


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