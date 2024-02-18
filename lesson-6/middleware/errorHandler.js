function ErrorHandler (err,req,res, next)  {
            if(err){
                        console.log(err.state);
                        res.json({
                             errorMessage: err.errorMessage,

                        })
                        
            }
}
export {ErrorHandler}