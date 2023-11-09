
const mongoose = require('mongoose');

const schema= mongoose.schema;

const userSchema = new schema({
    name: {
        type: String,
        required: true,
       
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        
    }
});


exports.User = User;

