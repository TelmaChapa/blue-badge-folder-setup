let router = require('express').Router();
var app = express();
var testController = require('./controllers/testcontroller')
app.use("/test",);

app.listen(3000, function () {
    console.log("App is listening to port 3000");
});