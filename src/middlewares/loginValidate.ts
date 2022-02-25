import { Request, Response, NextFunction } from 'express';
import { IULogin } from '../interfaces/Login';

export const loginValidate = (req:Request, res: Response, next:NextFunction) => {
  const user: IULogin = req.body;

  const { username, password } = user;

  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  if (!password) {
    return res.status(400).json({ error: 'Password is required' });
  }

  next();
};

export default loginValidate;