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
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  }) as ModelCtor<ItemModel>;
};
export default defineModel;
