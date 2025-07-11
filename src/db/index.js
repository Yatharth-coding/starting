import mongoose, { connect } from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async()=>{
    try {
        const connections = await mongoose.connect((`${process.env.MONGODB_URI}/${DB_Name}`))
        console.log(`MongoDB connected at host ${connections.connection.host}`);
    } catch (error) {
        console.log(`Error in loading the mongoose` , error);
        process.exit(1);
    }
}

export default  connectDB