module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define('user', {
        username: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        passwordhash: {
            type: dataTypes.STRING,
            allowNull: false
        },

    })
    return User;
}