import { Request , Response , NextFunction } from "express";

export const notFoundMiddleware = (req : Request , res : Response , next :NextFunction) =>{

    try{
        res.status(404).json({message : "Route not found"}) ;
    }
    catch(error) {
        res.status(500).json({message : "Internal Server error"})
    }
}