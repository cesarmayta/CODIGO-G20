function boomErrorHandler(err,req,res,next){
    console.log("analizando error...")
    if(err.isBoom){
        console.log('es un error boom')
        const {output} = err
        res.status(output.statusCode).json(output.payload)
    }
    next(err)
}
function errorHandler(err,req,res,next){
    res.status(500).json({
        status:false,
        content:err.message
    })
}



module.exports =  {errorHandler,boomErrorHandler}