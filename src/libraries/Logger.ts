import winston from 'winston'

class Logger {
  private winston;

  constructor () {
    this.winston = winston.createLogger({
      format: winston.format.json(),
      transports: [
        new winston.transports.Console()
      ]
    })
  }

  info (message: string): void {
    this.winston.info(message)
  }

  error (message: string): void {
    this.winston.error(message)
  }
}

export default new Logger()
