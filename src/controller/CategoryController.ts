import { Request , Response } from "express";
import { Category } from "../models";



export const createCategory = async(req : Request , res : Response) =>{
    try{    
        const {name  } = req.body ; 
        // await Category.create({name})
        res.status(201).json({message : "created "})
    }
    catch(error) {
        res.status(500).json({message : "Internal Server Error"})
    }
} 