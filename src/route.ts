import express from 'express' ; 
import categoryRouter from './router/CategoryRoute'
import { login } from './controller/LoginController';

const routers = express.Router() ; 

routers.use("/category" , categoryRouter )
routers.use("/login" , login)

export default routers