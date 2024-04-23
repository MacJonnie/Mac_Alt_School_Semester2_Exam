const mongoose = require("mongoose");

require("dotenv").config()

const DB_CONNECTION_URL = process.env.DB_CONNECTION_URL

function connectToMongoDB(){
    mongoose.connect(DB_CONNECTION_URL)

    mongoose.connection.on("connected", () => {
        console.log("Mongodb connected successfully")
    } )

    mongoose.connection.on("error", (err) => {
        console.log("err")
        console.log("an error occurred!")
    } )
}

module.exports = { connectToMongoDB };