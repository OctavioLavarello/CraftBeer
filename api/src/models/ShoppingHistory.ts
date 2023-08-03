import { DataTypes, Model, ModelCtor } from "sequelize";
import { sequelize } from "../../db";

interface Attributes {
    id:string;
    date:Date;
    totalPrice:number;
   
  }
  type ShoppingHistoryModel = Model<Attributes> & {
    new (): Attributes;
  };

  const defineModel = (): ModelCtor<ShoppingHistoryModel> => {
    return sequelize.define("ShoppingHistory", {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      date: {
        type: DataTypes.DATE,
        allowNull:false,
      },
      totalPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }) as ModelCtor<ShoppingHistoryModel>;
};
export default defineModel;