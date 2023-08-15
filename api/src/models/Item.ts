import { DataTypes, Model, ModelCtor } from "sequelize";
import { sequelize } from "../../db";
import { ItemModelInterface } from "../interfaces/interfaces";

type ItemModel = Model<ItemModelInterface> & {
  new (): ItemModelInterface;
};

const defineModel = (): ModelCtor<ItemModel> => {
  return sequelize.define("Item", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    unitPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }) as ModelCtor<ItemModel>;
};
export default defineModel;
