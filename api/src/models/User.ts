import { DataTypes, Model } from 'sequelize';
import { sequelize } from './sequelize'; // Archivo para configurar Sequelize y la conexión a la base de datos


interface UserAttributes {
  id: string;
  name: string;
  lastName: string;
  document: number;
  email: string;
  password: string;
  status: boolean;
  direccion: string;
  image?: string;
}

const defineUserModel = (): Model<UserAttributes> => {
  return sequelize.define('User', {
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
      type: DataTypes.INTEGER,
      allowNull: false,
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
    direccion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};

export = defineUserModel ;

