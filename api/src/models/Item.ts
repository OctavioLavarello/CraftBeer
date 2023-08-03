import { DataTypes, Model, ModelCtor } from "sequelize";
import { sequelize } from "../../db";

interface Attributes {
    id:string;
    amount:number;
    totalPrice:number;

  }
  type ItemModel = Model<Attributes> & {
    new (): Attributes;
  };

  const defineModel = (): ModelCtor<ItemModel> => {
    return sequelize.define("Item", {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull:false,
      },
      totalPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }) as ModelCtor<ItemModel>;
};
export default defineModel;