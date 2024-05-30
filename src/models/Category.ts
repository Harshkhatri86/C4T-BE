import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelizeConnection } from "../common/db/init";
import Service from "./Service";

interface CategoryAttributes {
  name: string;
  id: string;
}

class Category extends Model<CategoryAttributes> implements CategoryAttributes {
  public name!: string;
  public id!: string;
  static associate(models: any) {
    Category.hasOne(models.Service  , {
        onDelete : 'Cascade'
    })
  }
}

Category.init(
  {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey : true
    },
  },
  { 
    sequelize: sequelizeConnection , 
    tableName : "Categories"  , 
    modelName : "Category" , 
    timestamps : true

  }
);


export default Category ; 