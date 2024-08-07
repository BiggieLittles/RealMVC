// import sequelize
const Sequelize = require('sequelize')
// this functions lets sequelize to connect database to run server
let sequelize;
// connect jawsurl using sequelize
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}
// export sequelize 
module.exports = sequelize;