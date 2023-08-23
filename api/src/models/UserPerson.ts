import { DataTypes, Model, ModelCtor } from "sequelize";
import { sequelize } from "../../db";
import UserRole from "../emuns";
import { UserPersonModelInterface } from "../interfaces/interfaces";



type UserModel = Model<UserPersonModelInterface> & {
  new (): UserPersonModelInterface;
};

const defineUserModel = (): ModelCtor<UserModel> => {
  return sequelize.define("userPerson", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    document: {
      type: DataTypes.BIGINT,
      allowNull: true,
      unique:true,
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
      defaultValue: UserRole.Person, 
      validate: {
        isIn: [Object.values(UserRole)], // Asegura que el valor del enum sea válido
      },
    },
  }) as ModelCtor<UserModel>;
};

export default defineUserModel;
