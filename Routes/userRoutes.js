const express = require('express');
const User = require('../Models/User');

const router = express.Router();

router.post('/login', (req, res) => {
    User.find({ username: req.body.username }).then(user => {
        if (user[0].password !== req.body.password) {
            res.status(500).send('Invalid Credentials');
        } else {
            res.send('ok')
        }
    }).catch(err => {
        res.status(500).send('Invalid Credentials')
    })
})


router.post('/signUp', (req, res) => {
    const data = req.body;
    const user = new User(data);
    user.save().then(result => {
        res.send({
            username: user.username,
            password: user.password
        })
    }).catch(err => {
        res.status(500).send(err);
    });
})

module.exports = router;