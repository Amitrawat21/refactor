import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    location : {
        type: String,
     
      
       
       
    },

 
});

const users = new model("users",userSchema);


export default users;