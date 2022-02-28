import { Request, Response } from 'express';
import { createProductService, getProductService } from '../services/productService';
import { IUproduct } from '../interfaces/Product';

export const createProductController = async (req: Request, res: Response) => {
  const product: IUproduct = req.body;

  const newProduct = await createProductService(product);

  return res.status(201).json(newProduct);
};

export const getProductsController = async (_req: Request, res: Response) => {
  const products = await getProductService();
  res.status(200).json(products);
};

export default createProductController;