import { Category } from "../model/Category";

// DTO <> Data Transfer Object
interface ICreateCategoryDto {
  name: string;
  description: string;
}

class CategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ description, name }: ICreateCategoryDto) {
    const category: Category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }
}

export { CategoryRepository };