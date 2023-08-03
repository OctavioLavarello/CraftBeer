import { DataTypes, Model, ModelCtor } from "sequelize";
import { sequelize } from "../../db";

interface Attributes {
    id:string;
    rate:number;
  }
  type qualificationModel = Model<Attributes> & {
    new (): Attributes;
  };

  const defineModel = (): ModelCtor<qualificationModel> => {
    return sequelize.define("Qualification", {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      rate:{
        type: DataTypes.INTEGER,
        allowNull:false,
        validate:{
            min:1,
            max:5
        }
      }
        
    }) as ModelCtor<qualificationModel>;
};
export default defineModel;