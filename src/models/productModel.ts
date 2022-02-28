import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUproduct } from '../interfaces/Product';

export const createProduct = async (product: IUproduct) => {
  const { name, amount } = product;

  const [result] = await connection.execute <ResultSetHeader>(
    '  INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  return result.insertId;
}; 

export const getProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return result;
};

export default {
  createProduct,
  getProducts,
};