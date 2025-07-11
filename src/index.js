// require('dotenv').config({path:'./env'})


import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path:'./env'
})

connectDB()

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