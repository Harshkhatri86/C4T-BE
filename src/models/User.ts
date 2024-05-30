import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelizeConnection } from "../common/db/init";
import Service from "./Service";

interface UserAttributes {
  email: string;
  id: string;
  password : string ; 
}

class User extends Model<UserAttributes> implements UserAttributes {
  public email!: string;
  public id!: string;
  public password!: string;
  static associate(models: any) {
  }
}

User.init(
  {
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true 
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey : true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
  { 
    sequelize: sequelizeConnection , 
    tableName : "Users"  , 
    modelName : "User" , 
    timestamps : true

  }
);


export default User ; 