const {  DataTypes  } = require('sequelize');
const {sequelize} =  require('./database.js') ;
//Announcement
Announcement = sequelize.define('Announcement', {
    id :{
        type : DataTypes.INTEGER ,
        allowNull : false ,
        primaryKey: true,
        autoIncrement: true
    },
    title :{
        type :DataTypes.STRING ,
        allowNull : false ,
    },
    content :{
        type :DataTypes.STRING ,
        allowNull : false ,
    },
    user_id :{
        type : DataTypes.INTEGER,
        allowNull : false ,
    },
    created_at:{
        type :DataTypes.DATE ,
        defaultValue  : DataTypes.NOW,
        allowNull : false ,
        
    },
    updated_at :{
        type :DataTypes.DATE ,
        defaultValue  : DataTypes.NOW ,
        allowNull : false ,
    }

});

announcement_attachment  =  sequelize.define('announcement_attachment', {
    id :{
        type : DataTypes.INTEGER ,
        allowNull : false ,
        primaryKey: true,
        autoIncrement: true
    },
    announcement_id  :{
        type :DataTypes.INTEGER ,
        allowNull : false ,
        
    },
    file_name  :{
        type :DataTypes.STRING ,
        allowNull : false 
    },
    file_path :{
        type :DataTypes.STRING ,
        allowNull : false 
    },
});
// Users
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

//  clubs
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
        type :DataTypes.STRING ,
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


Announcement.belongsTo(user, { foreignKey: 'user_id' });
user.hasMany(Announcement, { foreignKey: 'user_id' });

Announcement.hasOne(announcement_attachment, { foreignKey: 'announcement_id' });
announcement_attachment.belongsTo(Announcement, { foreignKey: 'announcement_id' });

base_profile.hasOne(user, { foreignKey: 'base_profile_id' });
user.belongsTo(base_profile, { foreignKey: 'base_profile_id' });

club.belongsTo(council, { foreignKey: 'name' });
council.hasMany(club, { foreignKey: 'name' });

council.belongsTo(user, { foreignKey: 'secretary' });
user.hasOne(council, { foreignKey: 'secretary' });

club.belongsTo(base_profile, { foreignKey: 'id' });

membership.belongsTo(user, { foreignKey: 'user_id' });
user.hasMany(membership, { foreignKey: 'user_id' });

membership.belongsTo(club, { foreignKey: 'club_id' });
club.hasMany(membership, { foreignKey: 'club_id' });

thread.belongsTo(user, { foreignKey: 'user_id' });
user.hasMany(thread, { foreignKey: 'user_id' });

thread.belongsTo(club, { foreignKey: 'club_id' });
club.hasMany(thread, { foreignKey: 'club_id' });

comments.belongsTo(thread, { foreignKey: 'thread_id' });
thread.hasMany(comments, { foreignKey: 'thread_id' });

comments.belongsTo(user, { foreignKey: 'user_id' });
user.hasMany(comments, { foreignKey: 'user_id' });
sequelize.sync()   

module.exports = {Announcement, announcement_attachment ,base_profile, user , club ,council,membership ,thread , comments};