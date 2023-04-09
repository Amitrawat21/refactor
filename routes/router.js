import express from "express"
const router = express.Router()
import users from "../models/userSchema.js";


router.post("/register",async(req,res)=>{
    // console.log(req.body);
    const {name,email,age,mobile , location} = req.body;

    if(!name || !email || !age || !mobile  ){
        res.status(422).json("plz fill the data");
    }

    try {
        
        const preuser = await users.findOne({email:email});
      

        if(preuser){
            res.status(422).json("this is user is already present");
        }else{
            const adduser = new users({
                name,email,age,mobile , location
            });
           

            await adduser.save();
            res.send(adduser)
        }

    } catch (error) {
        res.status(422).json(error);
    }
})



router.get("/getdata",async(req,res)=>{
    try {
        const userdata = await users.find();
        res.status(201).json(userdata)
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
})





router.get("/getuser/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await users.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})




router.put("/updateuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await users.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
})


router.delete("/deleteuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const deletuser = await users.findByIdAndDelete({_id:id})
        console.log(deletuser);
        res.status(201).json(deletuser);

    } catch (error) {
        res.json(error);
    }
})


router.put("/location/:id" , async (req,res)=>{
     try{
        const {id} = req.params;
        const {location} = req.body
        console.log(location)

    
        // const userdetail = await users.findById({_id :id}) 
        // if(userdetail){
        //     userdetail.location = location
          

        // }
        const userdetail = await users.findByIdAndUpdate(id,req.body,{
            new:true
        });
      
        res.send(userdetail)
        console.log(userdetail , "updated user id")

     }

     catch(error){
        res.json(error)
     }

})




export default router
