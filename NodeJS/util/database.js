const Sequelize=require('sequelize');

const sequelize=new Sequelize("mydb","root","",{
    dialect:"mysql",
    host:"localhost"
});

module.exports=sequelize;





// const mysql=require('mysql2');

// const pool=mysql.createPool({
//     host:"localhost",
//     database:"mydb",
//     user:"root",
//     password:""
// });

//module.exports=pool.promise(); 