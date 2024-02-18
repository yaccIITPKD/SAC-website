const {  DataTypes  } = require('sequelize');
const {sequelize} =  require('./database.js') ;
const {user} =  require('./user.js') ;
const {thread} =  require('./thread.js') ;

comments = sequelize.define('comments', {
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

comments.belongsTo(thread, { foreignKey: 'thread_id' });
thread.hasMany(comments, { foreignKey: 'thread_id' });

comments.belongsTo(user, { foreignKey: 'user_id' });
user.hasMany(comments, { foreignKey: 'user_id' });

module.exports = { comments};