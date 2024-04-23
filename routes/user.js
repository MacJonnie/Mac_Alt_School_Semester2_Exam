const express = require("express");
const verifyToken = require("../middleware/auth_jwt")

const { signup, signin } = require("../controllers/auth_controller");



const UsersRoute = express.Router();

UsersRoute.post("/register", signup, function (req, res) {

});

UsersRoute.post("/login", signin, function (req, res) {

});

UsersRoute.get("/resources", verifyToken, function (req, res) {
    if (user) {
      res.status(200)
        .send({
          message: "Congratulations! Access Granted"
        });
    } else {
      res.status(403)
        .send({
          message: "Access Not Granted!"
        });
    }
  });


module.exports = UsersRoute;
