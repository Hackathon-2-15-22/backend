import 'dotenv/config.js'
import express from 'express'
import logger from 'morgan'
import cors from 'cors'

import { router as profilesRouter } from './routes/profiles.js'
import { router as authRouter } from './routes/auth.js'
import { router as goalRouter } from './routes/goal.js'
import { router as incomesRouter } from './routes/incomes.js'
import { router as expenseRouter } from './routes/expenses.js'
import { router as categoryRouter } from './routes/categories.js'


import('./config/database.js')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use('/api/profiles', profilesRouter)
app.use('/api/auth', authRouter)
app.use('/api/goals', goalRouter)
app.use('/api/incomes', incomesRouter)
app.use('/api/expenses', expenseRouter)
app.use('/api/categories', categoryRouter)


app.use(function (req, res, next) {
  res.status(404).json({ err: "Not found" })
})

app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ err: err.message })
})

export { app }
