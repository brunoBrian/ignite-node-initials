import { CategoryRepository } from "../repositories/CategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  execute({ name, description }: IRequest) {
    const categoryAlreadExists = this.categoryRepository.findByName(name);

    if (categoryAlreadExists) {
      throw new Error("Category already exists");
    }

    this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryService };
