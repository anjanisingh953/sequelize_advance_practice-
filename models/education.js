module.exports = (sequelize,DataTypes)=>{
 const Education = sequelize.define('Education',{
        class_name:{
            type: DataTypes.STRING,
            allowNull : false
        },
        grade:{
            type: DataTypes.STRING,
        },
        passing_year:{
            type: DataTypes.STRING,
        }
        

  })
  return Education;  
}