import dotenv from 'dotenv'

dotenv.config()

export const config = {
   port : process.env.PORT || 5000,
   mongoDB: {
    url : process.env.MONGODB_URL
   },
   api:{
    prefix :'/api',
    version:'v1'
   },
   cors:{
    origin: 'http://localhost:3000' ,
    credential:true
   }
}