let express = require('express');
let app = express();
let sequelize = require('./db');

let logbook = require('./controllers/logbookcontroller');
let user = require('./controllers/usercontroller');

sequelize.sync();

app.use(express.json());

app.use('/user', user);
app.use('/logbook', logbook)


app.listen(3000, function () {
    console.log('App is listening on port 3000');
})