import Example from '@modules/examples/entities/Example'
import ExamplesRepository from '@modules/examples/repositories/ExamplesRepository'

class ExampleService {
  private examplesRepository: ExamplesRepository;

  constructor() {
    this.examplesRepository = new ExamplesRepository()
  }

  createAnExample(id: number): Example {
    return this.examplesRepository.create(id)
  }
}

export default ExampleService;
