import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username : {
            type:String,
            required : true,
            unique : true,
            lowercase : true,
            trim : true,
            index : true
        },
        email : {
            type:String,
            required : true,
            unique : true,
            lowercase : true,
            trim : true,
            index : true
        },
        password : {
            type:String,
            required : [true,"password is required"],
        },
        fullname : {
            type:String,
            required : true,
            trim : true,
            index : true
        },
        avatar: {
            type: String, // cloudinary url
            required: true,
        },
        coverImage:{
            type:String
        },
        watchHistory:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Video"
            }
        ],
        refereshToken : {
            type : String,
        }
    },
    {
        timestamps:true
    }
    
)

export const User = mongoose.model("User" , UserSchema) 