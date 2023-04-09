import dotenv from 'dotenv';
dotenv.config();
import express, { json } from "express";
const app = express();

import "./db/conn.js";
// import users from "./models/userSchema";
import cors from "cors";
import router from "./routes/router.js";

const port = process.env.PORT || 8003;

app.use(cors());
app.use(json());

app.get("/",(req,res)=>{
    res.json("server start")
})

app.use(router);

app.listen(port, () => {
    console.log(`server is start port number ${port}`);
});