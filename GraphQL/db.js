import Sequelize from 'sequelize'

const Conn = new Sequelize('GraphQL', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
export default Conn

