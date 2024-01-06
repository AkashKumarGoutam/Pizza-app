// import express , and line 4:- assign express into app , and then 
// then line 5 import PORT Number and line 7 listen Port number console 
const express= require('express')
const app=express()
const ejs= require("ejs")
const path = require('path')
const expressLayout = require("express-ejs-layouts")
const PORT= process.env.PORT || 3000


//assests
app.use(express.static("public"))

app.get("/" , (req , res)=>{
    // res.send karte hi direct browser par so karne lagra hai par res.render karne par html code ko render karna padta hai kisi dusre file se
    // res.send("Hello Akash Kumar")
    res.render("home")
})

// set Template engine
app.use(expressLayout)
app.set('views', path.join(__dirname,'/resources/views'))
app.set("view engine", "ejs")

app.listen(PORT , () =>{
    console.log("Listening on port 3000")
})