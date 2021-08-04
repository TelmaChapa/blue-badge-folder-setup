const { Sequelize } = require('sequelize');

//Option 2: Passing parameters separately(other dialects)
const sequelize = new Sequelize('journal-walkthrough', 'postgres', 'Password', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function () {
        console.log('Connected to journal-walkthrough postgres database');
    },
    function (err) {
        console.log(err);
    }
);

module.exports = sequelize;


