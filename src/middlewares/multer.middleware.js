import multer from "multer"

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp") //yahan par null is for error and ./public/temp is for storage of file 
  },
  filename: function (req, file, cb) {
    
    cb(null, file.originalname) // name same as upload by the user no problem will occur like same occurence of file as the file will remain in server only for the few seconds then it will be deleted

  }
})

export const upload = multer({   // we need to write the export as it is not there in github code
    storage
})