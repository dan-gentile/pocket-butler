module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        //add properties here
        // id: {
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     primaryKey: true
        //   },
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        phone: DataTypes.STRING,
        email:{
            type: DataTypes.STRING,
            unique:true
        }

    });

    User.associate = function(models){
        // add associations here
        User.hasMany(models.Day, {
            onDelete: "cascade"
        })
        User.hasMany(models.Task, {
            onDelete: "cascade"
        })
        User.hasMany(models.Week, {
            onDelete: "cascade"
        })
    };
    return User;
}