const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require("./userModel")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://ankitchoudhary:itg12345@cluster0.bmgz7kv.mongodb.net/");

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                } else {
                    res.json("The password is incorrect")
                }
            } else {
                res.json("No record existed")
            }
        })
})

app.post("/register", (req, res) => {
    const { email } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                return new Error('User already exists!');
            } else {
                UserModel.create(req.body)
                    .then(employees => res.json(employees))
                    .catch(err => res.json(err))
            }
        })

})
app.listen(5000, () => {
    console.log("server is running")
})