import { DataTypes, Model, ModelCtor } from "sequelize";
import { sequelize } from "../../db";
import { QualificationModelInterface } from "../interfaces/interfaces";

type qualificationModel = Model<QualificationModelInterface> & {
  new (): QualificationModelInterface;
};

const defineModel = (): ModelCtor<qualificationModel> => {
  return sequelize.define("Qualification", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    comment:{
      type:DataTypes.TEXT,
      allowNull:false,
      defaultValue:""
    }
  }) as ModelCtor<qualificationModel>;
};
export default defineModel;
