
const db=require('../util/database');
module.exports.insert=(userData)=>{
    // console.log(userData);

    let query="insert into `user`(`name`,`email`,`password`,`remark`) values (?,?,?,?)";
    db.execute(query,[userData.name,userData.email,userData.password,userData.remark])
    //execute

    //return result 
    return;
}