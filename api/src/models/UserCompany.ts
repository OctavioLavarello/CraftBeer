import { DataTypes, Model, ModelCtor } from "sequelize";
import { sequelize } from "../../db";
import UserRole from "../emuns";

interface UserCompanyAttributes {
  id: string;
  name: string;
  lastName: string;
  document: number;
  email: string;
  password: string;
  phone: number;
  country: string;
  city: string;
  state: string;
  company: string;
  status: boolean;
  address: string;
  image?: Text;
  role: UserRole;
}

type UserCompanyModel = Model<UserCompanyAttributes> & {
  new (): UserCompanyAttributes;
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
      allowNull:false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    document: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
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
