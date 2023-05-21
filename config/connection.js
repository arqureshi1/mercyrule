const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
// is nessary to deploy database to internet
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    //connect database to computer
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306 //database location in computer
    }
  );
}

module.exports = sequelize;
