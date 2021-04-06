class HttpException extends Error {
  public status
  public message

  constructor (status: number, message: string) {
    super(message)

    const customOrDefaultMessage = message || 'Internal Server Error';

    const isObject = typeof message === 'object'

    this.status = status || 500
    this.message = isObject ? JSON.stringify(message) : customOrDefaultMessage
  }
}

export default HttpException
