// require('dotenv').config({path:'./env'})

import connectDB from "./db/index.js";
import dotenv from "dotenv"//dotenv is used to load environment variables from .env files
import {app} from "./app.js"


dotenv.config({
    path:'./.env'
})

connectDB()
.then(
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Process is listening at the port ${process.env.PORT}`);
    })
    
)
// .then(
//     app.on("errror" , (error)=>{
//             console.log("ERR : " , error)
//             throw error
//         })
// )
.catch((err)=>{
    console.log(`The error occured while connectDB in index.js`,err);
    
})

/*
( async()=>{
    try {
        await mongoose.connect('${process.env.MONGODB_URI}/${DB_Name}')
        app.on("errror" , (error)=>{
            console.log("ERR : " , error)
            throw error
        })

        app.listen(process.env.PORT , ()=>{
            console.log(`Server is listening at ${process.env.PORT}`);
            
        })
        
    } catch (error) {
        console.error("Error:" , error)
        throw error
    }
})()

*/