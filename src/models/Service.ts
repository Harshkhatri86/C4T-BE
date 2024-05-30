import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelizeConnection } from "../common/db/init";
import Category from "./Category";
import PriceOption from "./PriceOption";

interface ServiceAttributes {
  servicename: string;
  id: string;
  categoryId: string;
  type: string;
  priceOptions: string;
}

class Service extends Model<ServiceAttributes> implements ServiceAttributes {
  public servicename!: string;
  public id!: string;
  public categoryId!: string;
  public type!: string;
  public priceOptions!: string;


  static associate(models: any) {
    Service.belongsTo(models.Category  , {
        foreignKey : "categoryId" , 
        as : "category"
    })
    Service.hasMany(models.PriceOption , {
        onDelete : 'CASCADE', 
    })
    Service.belongsTo(models.PriceOption , {
        foreignKey : "priceOptions"
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
    priceOptions: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4 , 
      allowNull: false,
      references : {
        model : PriceOption , 
        key : "id"
      }
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

// Service.hasMany(PriceOption , {foreignKey : "serviceId"})

export default Service;
