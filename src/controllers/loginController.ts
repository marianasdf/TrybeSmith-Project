import { Request, Response } from 'express';
import { getUserByLogin } from '../services/loginService';

export const getUserByLoginController = async (req: Request, res:Response) => { 
  const { username, password } = req.body;

  const token = await getUserByLogin({ username, password }); 

  if (token === null) {
    return res.status(401).json({ error: 'Username or password invalid' });
  }

  return res.status(200).json({ token });
};

export default getUserByLogin;
