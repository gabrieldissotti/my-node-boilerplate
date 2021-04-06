import { Router } from 'express';

import ExamplesController from '@modules/examples/controllers/ExamplesController';

const examplesRouter = Router();

examplesRouter.post('/', ExamplesController.store);

export default examplesRouter;
