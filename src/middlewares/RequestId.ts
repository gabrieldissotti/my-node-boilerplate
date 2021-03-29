import addRequestId from 'express-request-id'

class RequestId {
  public assign () {
    return addRequestId({
      uuidVersion: 'v4'
    })
  }
}

export default new RequestId()
