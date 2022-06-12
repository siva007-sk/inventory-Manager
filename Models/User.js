const mongoose = require('mongoose');

const User = new mongoose.model('user', new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        validate: {
            validator: function (v) {
                const regEx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
                return regEx.test(v);
            }
        }
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return regEx.test(v);
            }
        }
    },
    name: {
        type: String,
        required: true
    }
}));
module.exports = User;