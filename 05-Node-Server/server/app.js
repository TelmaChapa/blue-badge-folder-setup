//require("dotenv").config();
let express = require('express');
let app = express();
// let sequelize = require('./db');
let journal = require('./controllers/journalcontroller');
//let user = require('./controllers/usercontroller');

//sequelize.sync();
//sequelize.sync({force:true})

// app.use('/test', function (req, res) {
//     res.send('This is a message from the test endpoint on the server!');
// });

//app.use('/telma', function (req, res) {
//    res.send('My name is Telma and I am 94 years old');
//});

//Have endpoint of journal/practice
// send a response for that endpoint (This is a practice route)
//app.use(express.json());

app.use('/journal', journal);
//app.use('/user', user);

//app.use('/about', require('./controllers/journalcontroller')); this line gets grabbed and added to line 3 above, erasing it from here, as of right now "commented out". Min 7:10 Video 4.2 module


app.listen(3000, function () {
    console.log('App is listening on port 3000');
});



