// const mysql= require('mysql2')

// const pool=mysql.createPool({
//     host:'localhost',
//     user:'root',
//     database:'node_complete',
//     password:'Saibaba@1234'
// });

// module.exports=pool.promise();


const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_complete', 'root', 'Saibaba@1234', 
{
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;