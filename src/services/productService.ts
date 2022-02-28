import { createProduct } from '../models/productModel';
import { IUproduct } from '../interfaces/Product';

export const createProductService = async (product: IUproduct) => {
  const { name, amount } = product;
  const id = await createProduct(product);
  return { item: { id, name, amount } };
};

export default createProduct;