import express from "express";
import jwt from "jsonWebToken";
import { JWT_SECRET } from "@repo/backend-common/config"
import { middleware } from "./middleware";
import {CreateUserSchema, SigninSchema, CreateRoomSchema} from "@repo/common/types";
import {prismaClient} from "@repo/db/client"

const app= express();
app.use(express.json())

app.post("/signup", async(req, res)=>{
    const parsedData= CreateUserSchema.safeParse(req.body);
    console.log(parsedData)
    if(!parsedData.success){
        res.json({msg:"Incorrect inputs"});
        return;
    }

    try{
        const user= await prismaClient.user.create({
        data:{
            email: parsedData.data?.email,
            password: parsedData.data.password,
            name: parsedData.data.name

        }
    })
    res.json({userId: user.id});

    }catch(e){
        res.status(411).json({msg: "user already exists with this username "})
    }
    
})

app.post("/signin", async(req, res)=>{

    const parsedData= SigninSchema.safeParse(req.body);
    if(!parsedData.success){
        res.json({msg:"Incorrect inputs"});
        return;
    }

    const user= await prismaClient.user.findFirst({
        where:{
            email: parsedData.data.email,
            password: parsedData.data.password
        }
    })

    if(!user){
        res.status(403).json({msg: "Email or password not found"})
        return;
    }
    
    const token= jwt.sign({
                userId: user?.id
            },JWT_SECRET)
                res.json({token});
});

app.post("/room", middleware, async(req, res)=>{

    const parsedData= CreateRoomSchema.safeParse(req.body);
    if(!parsedData.success){
        res.json({msg:"Incorrect inputs"});
        return;
    }

    //@ts-ignore
    const userId= req.userId;

    try{
        const room= await prismaClient.room.create({
        data:{
            slug: parsedData.data.name,
            adminId: userId
        }
    })

    res.json({ roomId: room.id});
    }catch(e){
        res.status(411).json({msg:" Room already exists with this name "});
    }
})

app.listen(3002, ()=>{
    console.log("server listening on 3002"); 
})

