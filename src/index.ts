import app from './app';
import { env } from './configs/app'
import serverless from 'serverless-http'

if(env === 'local.test'){
  app.listen(3333)
}

exports.run = serverless(app)

