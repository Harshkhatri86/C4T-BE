import { Sequelize } from "sequelize";
require("dotenv").config();

const sequelizeConnection = new Sequelize(
  process.env.DB_NAME || "CodeforTomorrow",
  process.env.DB_ROOT || "root",
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt( process.env.DB_PORT)  :  3306,
    dialect: "mysql",
    pool: {
      min: 0,
      max: 5,
      acquire : 30000, 
      idle : 10000
    },
    logging: true,
  }
);

export const dbConnect = async () =>{
    try{
        await sequelizeConnection.authenticate() ; 
        console.log(`
        ------------------------------------------------------------
                            Connected To DB
        ------------------------------------------------------------
        `)
    }
    catch(error){
        console.error(`Error Connecting to Db ${error}`) ; 
    }
} 
