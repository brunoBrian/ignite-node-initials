import { ICategoryRepository } from "../repositories/ICategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute({ name, description }: IRequest) {
    const categoryAlreadExists = this.categoryRepository.findByName(name);

    if (categoryAlreadExists) {
      throw new Error("Category already exists");
    }

    this.categoryRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
