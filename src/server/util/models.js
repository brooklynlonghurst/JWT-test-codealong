const db = require('./database')
const {DataTypes} = require('sequelize')

module.exports = {
    User: db.define('user', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: DataTypes.STRING({length: 20}),
        password: DataTypes.STRING //default length of 255

    })
}