const {  DataTypes  } = require('sequelize');
const {sequelize} =  require('./Database.js') ;
const {User} =  require('./User.js') ;
const {Thread} =  require('./thread.js') ;

Comments = sequelize.define('Comments', {
    id :{
        type : DataTypes.INTEGER ,
        allowNull : false ,
        primaryKey: true,
        autoIncrement: true
    },
    content  :{
        type :DataTypes.TEXT ,
        allowNull : false 
    },
    user_id :{
        type :DataTypes.INTEGER ,
       
    },
    thread_id  :{
        type :DataTypes.INTEGER ,
    },
    
    likes : {
        type :DataTypes.INTEGER ,
        defaultValue  : 0
    }
   
});

Comments.belongsTo(Thread, { foreignKey: 'thread_id' });
Thread.hasMany(Comments, { foreignKey: 'thread_id' });

Comments.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Comments, { foreignKey: 'user_id' });

module.exports = { Comments};