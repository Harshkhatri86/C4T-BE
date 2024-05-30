import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelizeConnection } from "../common/db/init";
import Service from "./Service";

interface PriceOptionAttributes {
  duration: string;
  id: string;
  price: number;
  type: string;
  serviceId: string;
}

class PriceOption
  extends Model<PriceOptionAttributes>
  implements PriceOptionAttributes
{
  public duration!: string;
  public id!: string;
  public price!: number;
  public type!: string;
  public serviceId!: string;
  static associate(models: any) {
    PriceOption.belongsTo(models.Service , {
        foreignKey : "serviceId" , 
        as : "serviceId"
    })
  }
}

PriceOption.init(
  {
    duration: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    serviceId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue : DataTypes.UUIDV4 , 
      references :{
        model : Service,
        key : "id"
      }
    },
  },
  {
    sequelize: sequelizeConnection,
    tableName: "PriceOptions",
    modelName: "PriceOption",
    timestamps: true,
  }
);

export default PriceOption;
