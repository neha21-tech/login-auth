
const express = require("express");
let mongodb = require("mongodb");
const cors = require("cors");
const bodyparser = require("body-parser");


// create the rest service object
let app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors());

let student = mongodb.MongoClient;
// create the rest api

app.post("/login",(req,res)=>{
    student.connect("mongodb+srv://admin:admin@cluster0.ah1c4.mongodb.net/Student?retryWrites=true&w=majority",(err,conn)=>{
        if(err) throw err;
        else{
            let db = conn.db("Student");
            db.collection("login").find({"uname":req.body.uname,"upwd":req.body.upwd})
            .toArray((err,my_array)=>{
                if(err) throw err;
                else{
                    if(my_array.length>0){
                        res.status(200).json({login:"success"});
                    }else{
                        res.status(200).json({login:"fail"});
                    }
                }
            })
        }
    })
});


// assign the customer port No
let port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("server started successfully !!!")
});