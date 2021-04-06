import Example from '@modules/examples/entities/Example';

class ExamplesRepository {
  public create(id: number): Example {
    const example = new Example(id);

    return example;
  }
}

export default ExamplesRepository;
