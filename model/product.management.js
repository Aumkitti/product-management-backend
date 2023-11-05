const {DataType, DataTypes} = require("sequelize")
const sequelize = require('./db')

const Product = sequelize.define("product",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Details:{
        type:DataTypes.STRING,
        allowNull:false
    },
    image:{
        type:DataTypes.STRING,
        allowNull:false
    },
    createdAt:{
        type:DataTypes.DATE,
        allowNull:true,
        defaultValue:DataTypes.NOW
    },
    updatedAt:{
        type:DataTypes.DATE,
        allowNull:true,
        defaultValue:DataTypes.NOW
    }

});
Restaurant.sync({
        force: false
    })
    .then(() => {
        console.log("Table created or already exists");
    })
    .catch((error) => {
        console.error("error creating table:", error);
    })


module.exports = Product;