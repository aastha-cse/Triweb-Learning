const Sequelize=require('sequalize');

const sequalize=new Sequelize("mydb","root","",{
    dialect:"mysql",
    host:"localhost"
});

module.exports=sequalize;