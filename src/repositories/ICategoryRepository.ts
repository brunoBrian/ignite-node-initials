import { Category } from "../model/Category";

// DTO <> Data Transfer Object
interface ICreateCategoryDto {
  name: string;
  description: string;
}

interface ICategoryRepository {
  create({ name, description }: ICreateCategoryDto): void;
  list(): Category[];
  findByName(name: string): Category | undefined;
}

export { ICategoryRepository, ICreateCategoryDto };
