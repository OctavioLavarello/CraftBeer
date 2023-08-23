import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";
import fs from "fs";
import path from "path";

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY, ENVIRONMENT } = process.env;

const sequelize = new Sequelize( ENVIRONMENT==="dev"?
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/craftbeer`:`${DB_DEPLOY}`,
  {
    logging: false,
    native: false,
  }
);

const basename = path.basename(__filename);

const modelDefiners: Array<(sequelize: Sequelize) => void> = [];

fs.readdirSync(path.join(__dirname, "src/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".ts"
  )
  .forEach((file) => {
    const modelDefiner = require(path.join(__dirname, "src/models", file));
    modelDefiners.push(modelDefiner.default);
  });

modelDefiners.forEach((modelDefiner) => modelDefiner(sequelize));

const upperCaseModels: Record<string, any> = {};
Object.entries(sequelize.models).forEach(([name, model]) => {
  const upperCaseName = name[0].toUpperCase() + name.slice(1);
  upperCaseModels[upperCaseName] = model;
});


// relacionamos
const { UserPerson,UserCompany,ShoppingHistory,Qualification,Product,Item,CodePassword} = upperCaseModels; 

UserPerson.hasMany(ShoppingHistory)
UserPerson.hasMany(Qualification)

UserCompany.hasMany(Product)

Product.hasMany(Qualification)
Product.hasMany(Item)
Product.belongsToMany(UserPerson,{through:"Favorite"})
UserPerson.belongsToMany(Product,{through:"Favorite"})

ShoppingHistory.hasMany(Item)




export { UserPerson,UserCompany,ShoppingHistory,Qualification,Product,CodePassword,Item,sequelize}
