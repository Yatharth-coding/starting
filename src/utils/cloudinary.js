import {v2 as cloudinary} from cloudinary
import fs from "fs"

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({ 
        cloud_name: process.env.cloud_name, 
        api_key: process.env.api_key, 
        api_secret: process.env.api_secret // Click 'View API Keys' above to copy your API secret
    });

const uploadOnCoudinary = async function (localFilePath) {
    try {
        
        if(!localFilePath) return null
        
        const response = await cloudinary.uploader.upload(localFilePath , {
            resource_type : "auto"
        })

        fs.unlinkSync(localFilePath)
        return response;
        
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null ;
        
    }
}

export {uploadOnCoudinary}