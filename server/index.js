/*
old way 
const express = require ("express")
got to package.json --> after "main"--> type":"module" 
*/
import express from "express";
import cookieParser from "cookie-parser";
import cors from  "cors";

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'http//localhost:5173',
    credentials:true
}
app.use(cors(corsOptions));

const app = express();

const PORT  =3000;
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
});
