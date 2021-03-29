import Logger from '@libraries/Logger'

describe('Logger library', () => {
  it('should be able to log in info level', () => {
    expect(() => Logger.info('Some log')).not.toThrow(Error)
  })

  it('should be able to log in error level', () => {
    expect(() => Logger.error('Some log')).not.toThrow(Error)
  })
})
