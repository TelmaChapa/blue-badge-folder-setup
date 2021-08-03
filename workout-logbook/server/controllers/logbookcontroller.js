let express = require('express');
let router = express.Router();

router.get('/about', function (req, res) {
    res.send('Hey!! This is the about route!')
})




module.exports = router