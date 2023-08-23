import { DataTypes, Model, ModelCtor } from "sequelize";
import { sequelize } from "../../db";
import UserRole from "../emuns";
import { UserCompanyModelInterface } from "../interfaces/interfaces";


type UserCompanyModel = Model<UserCompanyModelInterface > & {
  new (): UserCompanyModelInterface ;
};

const defineUserModel = (): ModelCtor<UserCompanyModel> => {
  return sequelize.define("userCompany", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull:true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    document: {
      type: DataTypes.BIGINT,
      allowNull: true,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: UserRole.Company, 
      validate: {
        isIn: [Object.values(UserRole)], // Asegura que el valor del enum sea válido
      },
    },
  }) as ModelCtor<UserCompanyModel>;
};

export default defineUserModel;
