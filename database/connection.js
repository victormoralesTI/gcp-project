const {Sequelize} = require('sequelize');
const env = require('../utils/environment');
const setupModels = require('./models');

console.log(env.dbDialect);
const uri_connection = encodeURI(`${env.dbDialect}://${env.dbUser}:${env.dbPassword}@${env.dbHost}:${env.dbPort}/${env.dbName}`);
const sequelize = new Sequelize(uri_connection);
setupModels(sequelize);

const testConnectionDB = async()=>{
    try {
        await sequelize.authenticate();
        console.log("Successfully connected to database.")
    } catch (error) {
        console.log("Failed connection to database.")
    }
}

module.exports = { sequelize, testConnectionDB };