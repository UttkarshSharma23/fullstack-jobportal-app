/*
old way 
const express = require ("express")
got to package.json --> after "main"--> type":"module" 
 add this is package.json --> in script-->"dev":"nodemon index.js",
*/
import express from "express";
import cookieParser from "cookie-parser";
import cors from  "cors";
import dotenv from "dotenv"
import conncetDB from "./utils/db.js";
dotenv.config({});


const app = express();

app.get("/home",(req,res)=>{
    return res.status(200).json({
        message:"Welcome to backend",
        success: true
    })
})



//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'http//localhost:5173',
    credentials:true
}

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000 ;

app.listen(PORT,()=>{
    conncetDB();
    console.log(`Server is running at ${PORT}`)
});
