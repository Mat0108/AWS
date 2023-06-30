const { Sequelize } = require('sequelize');

// your config file will be in your directory
const sequelize = new Sequelize(process.env.DATABASE, process.env.LOGIN, process.env.PASSWORD, {
   host: process.env.HOST,
   port: 5432,
   logging: console.log,
   maxConcurrentQueries: 100,
   dialect: 'postgres',
   dialectOptions: {
       ssl:'Amazon RDS'
   },
   pool: { maxConnections: 5, maxIdleTime: 30},
   language: 'en'
})
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;