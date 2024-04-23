const express = require("express");

const {connectToMongoDB} = require("./database/connection.db")
const UsersRoute = require("./routes/user")
const bodyParser = require("body-parser");
const { requestHandler } = require("./test/utils/route_test");



require("dotenv").config()


const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json())

app.use(express.urlencoded({
    extended: true
}));


app.use("/", UsersRoute)

connectToMongoDB()


app.use("/Blog", requestHandler);


app.get("/", (req, res) =>{
    res.send("Welcome to Macs Blog API")
})

app.listen(PORT, () =>{
    console.log(`Sever is listening on ${PORT}`);
})