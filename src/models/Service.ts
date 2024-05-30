import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelizeConnection } from "../common/db/init";
import Category from "./Category";

interface ServiceAttributes {
  servicename: string;
  id: string;
  categoryId: string;
  type: string;
  priceOption: string;
}

class Service extends Model<ServiceAttributes> implements ServiceAttributes {
  public servicename!: string;
  public id!: string;
  public categoryId!: string;
  public type!: string;
  public priceOption!: string;


  static associate(models: any) {
    Service.belongsTo(models.Category  , {
        foreignKey : "categoryId" , 
        as : "category"
    })
    Service.hasMany(models.PriceOption , {
        onDelete : 'CASCADE'
    })
  }
}

Service.init(
  {
    servicename: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    type: {
      type: DataTypes.CHAR(10),
      allowNull: false,
    },
    priceOption: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      references :{
        model : Category , 
      }
    },
  },
  {
    sequelize: sequelizeConnection,
    tableName: "Services",
    modelName: "Service",
    timestamps: true,
  }
);

export default Service;
