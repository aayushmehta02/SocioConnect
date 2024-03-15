const connectDB = require('./config/db')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors());
connectDB();



app.use(express.json({extended: false})) // Middleware
app.get('/', (req,res)=> res.send("API RUNNING"))

app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth',require('./routes/api/auth'))
app.use('/api/profile',require('./routes/api/profile'))
app.use('/api/posts',require('./routes/api/posts'))


const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> console.log(`server started on port ${PORT}`))