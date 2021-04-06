import { NextFunction, Request, Response } from 'express';
import ExampleService from '../services/ExampleService';
import StoreExampleValidator from '../validators/StoreExampleValidator'
import StoreExampleResource from '../resources/StoreExampleResource'

class ExamplesController {

  public async store(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
    try {
      const payload = new StoreExampleValidator(request.body)
      await payload.validate()

      const examplesService = new ExampleService();
      const data = examplesService.createAnExample(payload.id)

      const responseData = new StoreExampleResource({ ...data })
      return response.json(responseData);
    } catch (error) {
      return next(error)
    }
  }
}

export default new ExamplesController();
