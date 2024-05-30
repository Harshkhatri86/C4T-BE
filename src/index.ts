import express, { Request, Response } from 'express' ; 
import bodyParser from 'body-parser'; 
import cors from 'cors' ; 

const app = express() ; 

app.use(cors()) ; 
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json()) ; 
app.use(express.json()) ; 

app.get("/health"  , (req : Request, res : Response) =>{
    res.status(200).json({message : "Serve is running"})
})

const bootStrap = async () =>{
    const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000 ; 
    const bindAddress = process.env.BIND_ADDRESS ? process.env.BIND_ADDRESS : '0.0.0.0'
    app.listen(PORT , bindAddress , () =>{
        console.log(`Application is running on port http://localhost:${PORT}`)
    })
}

bootStrap().catch((e) => console.log(`Error starting server`)) ; 