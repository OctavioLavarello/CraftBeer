import { DataTypes, Model, ModelCtor } from "sequelize";
import { sequelize } from "../../db";
import { ShoppingHistoryModelInterface } from "../interfaces/interfaces";

  type ShoppingHistoryModel = Model<ShoppingHistoryModelInterface> & {
    new ():ShoppingHistoryModelInterface;
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
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    }) as ModelCtor<ShoppingHistoryModel>;
};
export default defineModel;