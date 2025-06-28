require('dotenv').config()
let express  = require('express')
let app = express()
let cors = require('cors')
app.use(express.json())
app.use(cors(
    {
        origin : "http://localhost:5000",
        method : ['GET','POST','PUT','DELETE'],
        credential : true
    }
))
let port = process.env.PORT
let log = require('./API/log')
app.use('/log',log);
async function connectDB(){
    try{
    
    app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})
    }
    catch{
        console.log("Server stopped")
    }
}
connectDB()