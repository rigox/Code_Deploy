const express  = require("express")
// load variables
const  env =  require("./config/env.json")
const colors = require("colors");
const morgan = require("morgan");
const app =  express();



//middleware
app.use(express.urlencoded(),express.json())
app.use(morgan());

//load routes
const Files =   require('./routes/files')


//setup routes
app.use('/api/v1/files',Files);


//Listen to app
const PORT =  env.PORT || 5001;

app.listen(PORT,()=>{
       console.log(`listening on port ${PORT}`.green)
});