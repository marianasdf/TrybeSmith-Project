import userModel from '../models/userModel';
import { IUser } from '../interfaces/User';
import { generateToken } from '../middlewares/auth';

export const createUser = async (user: IUser) => {
  const User = await userModel(user);
  if (!User) return false;
  const token = generateToken(User);
  return { token };
};

export default createUser;