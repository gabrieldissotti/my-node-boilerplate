import * as yup from 'yup'
import RequestValidator from '@libraries/RequestValidator'
import HttpValidatorException from '@libraries/HttpValidatorException';

class StoreExampleValidator extends RequestValidator {
  public id: number;

  private schema: any;

  constructor(data: any) {
    super()

    this.setupSchema()

    this.id = data?.id;
  }

  private setupSchema() {
    this.schema = yup.object().shape({
      id: yup.number().min(1).required(),
    });
  }

  public async validate() {
    await this.schema.validate(this).catch(function (err: any) {
      throw new HttpValidatorException(err.errors)
    });
  }
}

export default StoreExampleValidator;
