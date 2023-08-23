import { DataTypes, Model, ModelCtor } from "sequelize";
import { sequelize } from "../../db";
import { codePasswordModelInterface } from "../interfaces/interfaces";

type codePasswordModel = Model<codePasswordModel> & {
  new (): codePasswordModelInterface;
};

const defineModel = (): ModelCtor<codePasswordModel> => {
  return sequelize.define("CodePassword", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code:{
        type :DataTypes.INTEGER,
        allowNull  :false
    },
    type:{
        type:DataTypes.ENUM('person','company'),
        allowNull: false
    }
  
  }) as ModelCtor<codePasswordModel>;
};
export default defineModel;
