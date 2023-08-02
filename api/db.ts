import dotenv from 'dotenv';
dotenv.config();
import { Sequelize, Dialect } from 'sequelize';
import fs from 'fs';
import path from 'path';

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/craftbeer`, {
  logging: false,
  native: false,
});


// Este código se usa cuando se va a deployar.

// const sequelize = new Sequelize(DB_DEPLOY, {
//   logging: false,
//   native: false,
//   dialect: 'postgres' as Dialect,
//   dialectOptions: {
//     ssl: {
//       require: true,
//     },
//   },
// });

const basename = path.basename(__filename);

const modelDefiners: Array<(sequelize: Sequelize) => void> = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    const modelDefiner = require(path.join(__dirname, '/models', file));
    modelDefiners.push(modelDefiner.default); // Assuming you are exporting the models as default
  });

modelDefiners.forEach((modelDefiner) => modelDefiner(sequelize));

let entries: [string, any][] = Object.entries(sequelize.models);
let capsEntries: [string, any][] = entries.map(
  (entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]
);
sequelize.models = Object.fromEntries(capsEntries);

const { User, Beer, Store } = sequelize.models;


//Uno a muchos

// Style.hasMany(Band);
// Band.belongsTo(Style);



// Muchos a muchos

// Musician.belongsToMany(Instrument, {
//   through: 'musician_instrument',
//   timestamps: false
// });
// Instrument.belongsToMany(Musician, {
//   through: 'musician_instrument',
//   timestamps: false
// });

export {
  sequelize,
  User,
  Beer,
  Store
};
