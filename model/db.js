const {Sequelize} = require("sequelize");
const dbConfig = require("../config/dbconfig.js");

const sequelize = new Sequelize('products', 'root', '', {
  host: 'localhost',
  dialect: 'mysql' 
});

async function testConection(){
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

testConection();

module.exports = sequelize;