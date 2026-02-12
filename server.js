const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config()
connectDB()

const app = express()
app.use(express.json())

app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/finances', require('./routes/financeRoutes'))

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
)
