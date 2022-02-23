import { Request, Response } from 'express';
import { createUser } from '../services/userService';
import { IUser } from '../interfaces/User';

export const createUserControler = async (req: Request, res: Response) => {
  const user: IUser = req.body;

  const newUser = await createUser(user);

  res.status(201).json(newUser);
};

export default createUserControler;
