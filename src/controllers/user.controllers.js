import {asyncHandler} from "../utils/asyncHandler.js"

const registerUser = asyncHandler( async(req , res) =>{
    
    // get the user details
    // check if any of them is not empty
    // check if the user is already registered
    // check for images , check for avatar
    // upload on cloudinary and also avatar
    // create user object and store in db
    // while sending the response make sure you should not pass the password and refresh token
    // check for user creation
    // return res

    const{username, email , passoword , fullname} = req.body;
    console.log("email : " , email);
    // console.log("fullname : " , fullname);
    
    
})

export { registerUser }