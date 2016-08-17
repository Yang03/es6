import Sequelize from 'sequelize'
import DB from './db'
export const user = DB.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
    },
    firstName: {
        type: Sequelize.STRING,
        field: 'firstName'
    }
}, {
    tableName: 'User',
    timestamps: false
})

export const post = DB.define('post', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
    },
    title: {
        type: Sequelize.STRING,
        field: 'title'
    },
    userId: {
        type: Sequelize.INTEGER,
        field: 'userId'
    }
}, {
    tableName: 'Post',
    timestamps: false
})
