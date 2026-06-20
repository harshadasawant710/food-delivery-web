import express from 'express'
import cors from 'cors'
import {config} from './src/config/index'
import apiRoutes from './src/routers/indexRoutes'
const app = express()

import errorMiddleware from './src/middlewares/ErrorMiddleware'
app.use(cors({
    origin: '*',
    credentials: config.cors.credential,
    methods:['GET','POST','DELETE','PUT','OPTIONS']
}))

app.use(express.json())
app.use(apiRoutes);


app.get('/health', (req,res)=>{
    res.status(400).json({
        success : false,
        message:"Route not found"
    })
})
app.use(errorMiddleware)


// app.use((err: any, req: any, res: any, next: any)=> {
// res.status(500).json({
//     success : false,
//     message : 'Internal issue, handling by app level error'})
// next()
// })


export default app 