const assyncHandler = (requestHandler) => {
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((error)=>next(error))
    }
}

export { assyncHandler }






// const assyncHandler = (fn) => async(req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success : false,
//             message : error.message
//         }) 
//     }
// }

// export {assyncHandler}