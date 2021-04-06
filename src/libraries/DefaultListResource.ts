class DefaultListResource {
  public number?: number
  public size?: number
  public totalPages?: number
  public numberOfElements?: number
  public totalElements?: number
  public firstPage?: boolean
  public hasPreviousPage?: boolean
  public hasNextPage?: boolean
  public hasContent?: boolean
  public first?: boolean
  public last?: boolean
  public nextPage?: number
  public previousPage?: number
  public content?: any[]

  constructor(data: DefaultListResource) {
    this.number = data.number
    this.size = data.size
    this.totalPages = data.totalPages
    this.numberOfElements = data.numberOfElements
    this.totalElements = data.totalElements
    this.firstPage = data.firstPage
    this.hasPreviousPage = data.hasPreviousPage
    this.hasNextPage = data.hasNextPage
    this.hasContent = data.hasContent
    this.first = data.first
    this.last = data.last
    this.nextPage = data.nextPage
    this.previousPage = data.previousPage
    this.content = data.content
  }
}

export default DefaultListResource;
