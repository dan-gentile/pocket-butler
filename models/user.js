module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('User', {
        //add properties here
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unique: true
        }

    });

    User.associate = function(models) {
        // add associations here
        User.hasMany(models.Day), {
                onDelete: "cascade"
            },
            User.hasMany(models.Week), {
                onDelete: "cascade"
            }
        User.hasMany(models.Task), {
                onDelete: "cascade"
            }
            // ex: User.hasMany(models.BlogPost)
    };
    return User;
}