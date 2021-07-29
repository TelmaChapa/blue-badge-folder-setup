let express = require('express');
let app = express();
let journal = require('./controllers/journalcontroller')
//app.use('/test', function (req, res) {
//    res.send('This is a message from the test endpoint on the server!');
//});

//app.use('/telma', function (req, res) {
//    res.send('My name is Telma and I am 49 years old');
//});

//Have endpoint of journal/practice
// send a response for that endpoint (This is a practice route)


app.use('/journal', journal)

app.use('/about', require('./controllers/journalcontroller'));


app.listen(3000, function () {
    console.log("App is listening on port 3000");
});



