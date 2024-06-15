const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();
const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI,{
useNewUrlParser:true,
useUnifiedTopology:true,
})
.then((res)=>{
    console.log("Connected");
})
.catch((err)=>{
    console.log("Not Connected");
})

const UInfoSchema=new mongoose.Schema({
    mail:{type:String,required:true},
    name:{type:String,required:true},
    age:{type:Number,required:true},
    mobile:{type:String,required:true},
});
const UProgressSchema=new mongoose.Schema({
    mail:{type:String,required:true},
    progress:{type:String},
    rewards:{type:String},
})

const UInfo=mongoose.model("UInfo",UInfoSchema);
const UProgress=mongoose.model("UProgress",UProgressSchema);

app.post("/adddetails",async(req,res)=>{
    try{
    const {mail,name,age,mobile}=req.body;
    const initial_pro="0";
    const initial_rew="0";
    const newUser=new UInfo({mail,name,age,mobile});
    const newProgress=new UProgress({mail,initial_pro,initial_rew});
    await newUser.save();
    await newProgress.save();
    res.status(200).json({msg:"Insertion Successful"})
    }
    catch(err){
        console.log(err);
    }

})

app.get("/getdetails",async(req,res)=>{
    try{
        const {mail}=req.query();
        const ReqUser=await UInfo.find({mail});
        res.json(ReqUser);
    }
    catch(err){
        res.status(500).json({msg:err});
    }
})

app.put("/updateProgress",async(req,res)=>{
    try{
        const {mail,progress}=req.body;
        const Users=await UProgress.find({mail});
        const Updated=Users.map((u)=>{
            u.progress=progress;
            return u.save();
        });
        await Promise.all(Updated);
        res.status(200).json({msg:"Updation Successful"});
    }
    catch(err){
        res.status(500).json(err);
    }
})

app.put("/updateRewards",async(req,res)=>{
    try{
        const {mail,reward}=req.body;
        const Users=await UProgress.find({mail});
        const Updated=Users.map((u)=>{
            u.rewards=reward;
            return u.save();
        });
        await Promise.all(Updated);
        res.status(200).json({msg:"Updation Successful"});
    }
    catch(err){
        res.status(500).json(err);
    }
})

app.listen(5000,()=>{
    console.log("Listening to the port 5000");
})