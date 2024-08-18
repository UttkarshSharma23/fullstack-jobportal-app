import mongoose, { Mongoose } from "mongoose";
const userSchema  = new Mongoose.Schema({
    fullname:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber :{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['student','recruiter'],
        required:true
    },
    profile:{
        bio:{type:string},
        skills:[{type:string}],
        resume:{type:string}, // URL to resume file
        resumeOriginalEmail:{type:string},
        //TODO: Company model
        company:{type:mongoose.Schema.Types.ObjectId, ref:'Company'} ,
        profilePhoto:{
            type:string,
            default:""
        }
    },
},{timeStamps:true});

export const user  = mongoose.model('User',userSchema)