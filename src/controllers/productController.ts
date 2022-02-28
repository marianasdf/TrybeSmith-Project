import { Request, Response } from 'express';
import { createProductService } from '../services/productService';
import { IUproduct } from '../interfaces/Product';

export const createProductController = async (req: Request, res: Response) => {
  const product: IUproduct = req.body;

  const newProduct = await createProductService(product);

  return res.status(201).json(newProduct);
};

export default createProductController;