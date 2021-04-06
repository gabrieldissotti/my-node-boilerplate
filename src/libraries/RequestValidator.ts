import * as yup from 'yup';
import validationErrors from '@configs/validationErrors'

class RequestValidator {
  constructor() {
    this.setupLocaleMessages()
  }

  private setupLocaleMessages() {
    yup.setLocale(validationErrors);
  }
}

export default RequestValidator;
