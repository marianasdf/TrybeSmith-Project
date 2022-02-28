import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const tokenValidate = async (req:Request, res:Response, next:NextFunction) => {
  const token = req.headers.authorization;
  const secret = 'mysecret';

  if (!token) {
    return res.status(401).json({ error: 'Token not found' });
  }
  try {
    jwt.verify(token, secret);
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

export default tokenValidate;