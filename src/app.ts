import express from 'express'
import routes from './routes'

import assignRequestId from '@middlewares/assignRequestId'
import exceptionHandler from '@middlewares/exceptionHandler'

const app = express()

app.use(assignRequestId)

app.use(routes)

app.use(exceptionHandler)

export default app
