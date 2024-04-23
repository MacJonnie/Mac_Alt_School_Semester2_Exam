const mongoose = require("mongoose");

// Creating a schema
const Schema = mongoose.Schema

const UserModel = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "email already exist!"],
        lowercase: true,
        trim: true,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: "{VALUE} is not a valid email!"
        }
        
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
})


module.exports = mongoose.model("User", UserModel);