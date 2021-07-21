

//@Desc upload a files
//@Router POST /api/v1/files
//@Access Public
exports.uploadFile = (async(req,res,next)=>{
   
    const body =   req.body;

     try {
        return body;     
     } catch (error) {
         console.log(error)
     }

});
