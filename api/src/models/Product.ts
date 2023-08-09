import { DataTypes, Model, ModelCtor } from "sequelize";
import { sequelize } from "../../db";
import { ProductModelInterface } from "../interfaces/interfaces"; 


type ProductModel = Model<ProductModelInterface> & {
  new (): ProductModelInterface;
};

const defineModel = (): ModelCtor<ProductModel> => {
  return sequelize.define("Product", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ABV: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    presentation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    qualification: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    IBU: {
      type: DataTypes.FLOAT,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },

    userCompanyId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    
  }) as ModelCtor<ProductModel>;
};

export default defineModel;
