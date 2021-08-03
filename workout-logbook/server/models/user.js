module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define('user', {
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },

    })
    return User;
}