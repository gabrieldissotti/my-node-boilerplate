import express from 'express'
import routes from './routes'

import RequestId from '@middlewares/RequestId'

const app = express()

app.use(RequestId.assign())
app.use(routes)

export default app
