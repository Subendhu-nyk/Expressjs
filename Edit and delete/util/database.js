const mysql= require('mysql2')

const pool=mysql.createPool({
    host:'localhost',
    username:'root',
    database:'node_complete',
    password:'Saibaba@1234'
});

module.exports=pool.promise();