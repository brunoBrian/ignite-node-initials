import { Router } from "express";

import { CategoryRepository } from "../repositories/CategoryRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();

const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(categoryRepository);

  createCategoryService.execute({ name, description });

  return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
  const list = categoryRepository.list();

  res.json(list);
});

export { categoriesRoutes };
