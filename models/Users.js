const {  DataTypes  } = require('sequelize');
const {sequelize} =  require('./database.js') 

base_profile = sequelize.define('base_profile ', {
    id :{
        type : DataTypes.INTEGER ,
        allowNull : false ,
        primaryKey: true,
        autoIncrement: true
    },
    name :{
        type :DataTypes.STRING ,
        allowNull : false 
    },
    username :{
        type :DataTypes.STRING ,
        allowNull : false ,
        unique : true
    },
    password :{
        type :DataTypes.STRING ,
        allowNull : false 
    },
    email  :{
        type :DataTypes.STRING ,
        allowNull : false ,
        unique :true
    }

});

user  =  sequelize.define('user', {
    id :{
        type : DataTypes.INTEGER ,
        allowNull : false ,
        primaryKey: true,
        autoIncrement: true
    },
    base_profile_id   :{
        type :DataTypes.INTEGER ,
        allowNull : false ,
       
    },
    joining_year  :{
        type :DataTypes.INTEGER ,
        allowNull : false 
    },
    program :{
        type :DataTypes.STRING ,
        allowNull : false 
    },
    branch :{
        type :DataTypes.STRING ,
        allowNull : false 
    },
    roll_no :{
        type :DataTypes.STRING ,
        allowNull : false ,
        unique : true 
    },
    role :{
        type :DataTypes.STRING ,
        allowNull : false 
    }
});
council  = sequelize.define('council', {
    id :{
        type : DataTypes.INTEGER ,
        allowNull : false ,
        primaryKey: true,
        autoIncrement: true
    },
    name :{
        type :DataTypes.STRING ,
        allowNull : false ,
        unique : true 
    },
    budget:{
        type :DataTypes.INTEGER ,
        allowNull : false ,
    },
    secretary :{
        type :DataTypes.INTEGER ,
        
    },
});
club = sequelize.define('club', {
    id :{
        type : DataTypes.INTEGER ,
        allowNull : false ,
        primaryKey: true,
        autoIncrement: true
    },
    base_profile_id :{
        type :DataTypes.INTEGER ,
        allowNull : false ,
        

    },
    description :{
        type :DataTypes.STRING ,    
    },
    budget :{
        type :DataTypes.INTEGER ,
        allowNull : false 
    },
    Council  :{
        type :DataTypes.INTEGER ,
    }

});


membership =  sequelize.define('membership', {
        user_id :{
            type : DataTypes.INTEGER ,
        },
        club_id   :{
            type :DataTypes.INTEGER ,
            
        },
        joined_at :{
            type :DataTypes.DATE ,
            defaultValue  : DataTypes.NOW
        }
    },
    {
        indexes :[ {
            unique : true ,
            fields: ['user_id', 'club_id'],
            primaryKey : true 
        }]
    
});

thread = sequelize.define('thread', {
    id :{
        type : DataTypes.INTEGER ,
        allowNull : false ,
        primaryKey: true,
        autoIncrement: true
    },
    title  :{
        type :DataTypes.TEXT ,
        allowNull : false ,
    },
    content :{
        type :DataTypes.TEXT ,
        allowNull : false ,
        
    },
    club_id :{
        type :DataTypes.INTEGER ,
    },
    user_id :{
        type :DataTypes.INTEGER ,
      
    },
    created_at :{
        type :DataTypes.DATE ,
        defaultValue  : DataTypes.NOW
    },
    likes : {
        type :DataTypes.INTEGER ,
        defaultValue  : 0
    }

});
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

// sequelize.sync()
user.belongsTo(base_profile, { foreignKey: 'id' });
club.belongsTo(base_profile, { foreignKey: 'id' });
council.belongsTo(user, { foreignKey: 'id' });
club.belongsTo(council, { foreignKey: 'id' });

membership.belongsTo(user, { foreignKey: 'id' });
membership.belongsTo(club, { foreignKey: 'id' });
thread.belongsTo(user, { foreignKey: 'id' });
thread.belongsTo(club, { foreignKey: 'id' });
comments.belongsTo(club, { foreignKey: 'id' });
comments.belongsTo(thread, { foreignKey: 'id' });
sequelize.sync()
module.exports = {base_profile, user , club ,council,membership ,thread , comments};