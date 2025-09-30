import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())
// app.use(cors())
app.use(cors({
  origin: 'https://lumeo-text-to-image-generator.vercel.app', // replace with your actual frontend URL
  credentials: true,
}));
await connectDB()




app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)
app.get('/', (req, res)=> res.send("API is working fine!"))

app.listen(PORT, ()=> console.log("server running on port "+ PORT));