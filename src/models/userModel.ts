import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUser, User } from '../interfaces/User';

export const createUser = async ({ username, classe, level, password } : IUser) => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES(?, ?, ?, ?)',
    [username, classe, level, password],
  );
  const { insertId: id } = result;
  const newUser: User = { id, username, classe, level, password };
  return newUser;
};

export default createUser;
