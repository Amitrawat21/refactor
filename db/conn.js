import { connect } from "mongoose";

const DB =  "mongodb+srv://AmitRawat:AmitRawat21@cluster0.v2znl.mongodb.net/refactormern?retryWrites=true&w=majority"


connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));