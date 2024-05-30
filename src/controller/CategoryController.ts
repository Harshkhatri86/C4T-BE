import { Request , Response } from "express";
import { Category } from "../models";



export const createCategory = async(req : Request , res : Response) =>{
    try{    
        const {name  } = req.body ; 
        console.log(name)
        // await Category.create({name : name })
    }
    catch(error) {
        res.status(500).json({message : "Internal Server Error"})
    }
} 