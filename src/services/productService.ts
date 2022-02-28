import { createProduct, getProducts } from '../models/productModel';
import { IUproduct } from '../interfaces/Product';

export const createProductService = async (product: IUproduct) => {
  const { name, amount } = product;
  const id = await createProduct(product);
  return { item: { id, name, amount } };
};

export const getProductService = async () => {
  const products = await getProducts();
  return products;
};

export default {
  createProduct,
  getProductService,
};