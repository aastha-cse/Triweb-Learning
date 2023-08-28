//const db=require('../util/database');

const Sequelize=require("sequelize");
const sequelize=require('../util/database');

const User=sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    },
    remark:Sequelize.STRING
});

module.exports=User;



























// module.exports.insert=async(userData)=>{
//     // console.log(userData);
    
//     let id=0;
//     try{
//         let query="insert into `user`(`name`,`email`,`password`,`remark`) values (?,?,?,?)";
        
//         //execute
//         let result=await db.execute(query,[userData.name,userData.email,userData.password,userData.remark]);
//         id=result[0].insertId;
//     }catch(error){
//         console.log(error);
//         return false;
//     }
//     //return result 
//     return id;
// }

// module.exports.get=async(userData)=>{
//         let retData='';
//         try{
//             let query="select * from `user` where id=?";
//             let result=await db.execute(query,[userData.id]);
//             retData=result[0][0];
//         }catch(error){
//             console.log(error);
//         }
//         return retData;
// }

// module.exports.update=async(userData)=>{
//     try{
//         let query="update `user` set `password`=? where id=?";
//         await db.execute(query,[userData.password,userData.id]);
//         return true;
//     }catch(error){
//         console.log(error);
//         return false;
//     }
// } 

// module.exports.delete=async(userData)=>{
//     try{
//         let query="delete from `user` where id=?";
//         await db.execute(query,[userData.id]);
//         return true;
//     }catch(error){
//         console.log(error);
//         return false;
//     }
// } 