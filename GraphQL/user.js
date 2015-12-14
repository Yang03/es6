import Sequelize from 'sequelize'
import DB from './db'
const user = DB.define('user', {
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
export default user