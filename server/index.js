import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'
import userRoutes from './routes/users.js'
const app= express()
dotenv.config();
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors())


app.get('/',(req,res)=>{
    res.send("This is stackOverflow clone")  
})

app.use('/users',userRoutes)
app.use('/questions',questionRoutes)
app.use('/answer',answerRoutes)


const PORT= process.env.PORT || 5000

const DATABASE_URL = "mongodb+srv://itsvaidahipatel:stackoverflow@socluster.5zmfcs4.mongodb.net/"
mongoose.connect(DATABASE_URL,{useNewUrlParser:true, UseUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>{
        console.log(`server running on port ${PORT}`)
    }))
    .catch((err)=>console.log(err.message))



