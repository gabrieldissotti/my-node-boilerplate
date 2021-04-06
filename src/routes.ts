import { Router } from 'express'

const routes = Router()

import examplesRouter from '@modules/examples/examples.routes';

routes.use('/examples', examplesRouter);

export default routes
