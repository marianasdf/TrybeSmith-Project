import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { IULogin } from '../interfaces/Login';

export const getUserByLogin = async (user : IULogin) => {
  const { username, password } = user;

  const [result] = await connection.execute <RowDataPacket[]>(
    'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
    [username, password],
  );

  return result;
};

export default getUserByLogin;