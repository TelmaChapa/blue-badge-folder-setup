let express = require('express');
let app = express();
let sequelize = require('./db');

let logbook = require('./controllers/logbookcontroller');

sequelize.sync();
//sequelize.sync({force: true})

app.use('/logbook', logbook)


app.listen(3000, function () {
    console.log('App is listening on port 3000');
})