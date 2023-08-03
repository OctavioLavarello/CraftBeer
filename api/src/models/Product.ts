import { DataTypes, Model, ModelCtor } from "sequelize";
import { sequelize } from "../../db";

interface Attributes {
    id:string;
    image:string;
    name:string;
    type:string;
    description:string;
    degreeOfAlcohol:number;
    presentation:string;
    price:number;
    stock:number;
    qualification?:number;
    status: boolean;
  }
  type ProductModel = Model<Attributes> & {
    new (): Attributes;
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
        allowNull:false,
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
          type: DataTypes.STRING,
          allowNull: false,
      },
      degreeOfAlcohol: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        unique: true,
      },
      presentation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      stock: {
          type:DataTypes.INTEGER,
          allowNull :false,
        },
        qualification: {
        type: DataTypes.DECIMAL,
        allowNull :true,
        },
         status: {
         type: DataTypes.BOOLEAN,
         allowNull: false,
        defaultValue: true,
              },
        
    }) as ModelCtor<ProductModel>;
};
export default defineModel;