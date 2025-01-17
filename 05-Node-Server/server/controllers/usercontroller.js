const router = require('express').Router();
const User = require('../db').import('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/create', function (req, res) {
    User.create({
        email: req.body.user.email,
        password: bcrypt.hashSync(req.body.user.password, 13)
    })
        .then(
            function createSuccess(user) {
                let token = jwt.sign({ id: user.id }, "i_am_secret", { expiresIn: 60 * 60 * 24 });

                res.json({
                    user: user,
                    message: "User successfully created!",
                    sessiontoken: token
                });
            }
        )
        .catch(err => res.status(500).json({ error: err }))
});

router.post('/login', function (req, res) {
    User.findOne({
        where: {
            email: req.body.user.email
        }
    })
        .then(function loginSuccess(user) {
            if (user) {
                bcrypt.compare(req.body.user.passwordHash, user.password, function (err, matches) {
                    if (matches) {

                        let token = jwt.sign({ id: user.id, email: user.email }, "i_am_secret", { expiresIn: 60 * 60 * 24 })
                        //'i_am_secret" temporarily left by Marco's suggestion, due to code not working//
                        //to be replaced by process.env.JWT_SECRET,//
                        res.status(200).json({
                            user: user,
                            message: "User successfully logged in!",
                            sessionToken: token
                        })

                    } else {
                        res.status(502).json({ error: "Login Failed" });
                    }
                });
            } else {
                res.status(500).json({ error: "User does not exist." })
            }
        })
        .catch(err => res.status(500).json({ error: err }))
});

module.exports = router;