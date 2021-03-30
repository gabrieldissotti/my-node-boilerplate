import express from 'express'
import routes from './routes'

import RequestId from '@middlewares/RequestId'
import exceptionHandler from '@middlewares/exceptionHandler'

const app = express()

app.use(RequestId.assign())
app.use(routes)
app.use(exceptionHandler)

export default app
