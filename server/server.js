const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
})
const Users = mongoose.model("Users", userSchema)

app.post("/register",(req, res) => {
Users.create({...req.body})
.then(user=>res.json(user))
.then(err=>res.json(err))
})

app.post("/login",(req,res)=>{
    const { email,password }=req.body
    Users.findOne({email,password}).then((user)=>{
        if(user){
            if(user.password==password){
                res.json("Success")
            }else{
                res.json("Password inst correct")
            }
        }else{
            res.json("User doesnt exist")
        }
    })
})

mongoose.connect("mongodb+srv://Yusif:Bedel@cluster0.ct5lqxj.mongodb.net/").then(res => {
    console.log("db connected")
})
app.listen(8080, (req, res) => {
    console.log("api running on 8080")
})