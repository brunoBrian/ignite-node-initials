import { Category } from "../model/Category";
import { ICategoryRepository, ICreateCategoryDto } from "./ICategoryRepository";

class PostgresCategoryRepository implements ICategoryRepository {
  findByName(name: string): Category | undefined {
    return undefined;
  }
  list(): Category[] {
    return [
      {
        id: "226abf62-6f3d-48e0-8425-a2c9e66037a8",
        name: "jui",
        description: "Bruno, O melhor do momento",
      },
    ];
  }
  create({ name, description }: ICreateCategoryDto): void {
    const a = 0;
  }
}

export { PostgresCategoryRepository };
