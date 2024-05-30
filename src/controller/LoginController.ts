import { Request, Response} from 'express' 
import { User } from '../models';
import bcrypt from 'bcrypt'

export const login  = async (req : Request , res : Response) =>{
    try{
        const {email  , password} = req.body ; 

        const user = await User.findOne({where  : {email}})

        if(!user){
            res.status(404).json({message : "User Not Found"})
            return ; 
        }

        // const passwordSalt = bcrypt.compare(password , user.password )
        // if(!passwordSalt){
        //     res.status(401).json({message: "Invalid Password"})
        //     return  ; 
        // } 

        res.status(200).json({message : "Logged in Successfully"})
    }
    catch(error){
        res.status(500).json({message : "Internal server error"})
    }
}