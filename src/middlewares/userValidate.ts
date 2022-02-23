import { Request, Response, NextFunction } from 'express';
import { IUser } from '../interfaces/User';

export const usernameValidate = (req : Request, res: Response, next: NextFunction) => {
  const user:IUser = req.body;

  const { username } = user;

  const CHARACTERS = 3;

  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  if (typeof username !== 'string') {
    return res.status(422).json({ error: 'Username must be a string' });
  }

  if (username.length < CHARACTERS) {
    return res.status(422).json({ error: 'Username must be longer than 2 characters' });
  }

  next();
};

export const classeValidate = (req : Request, res: Response, next: NextFunction) => {
  const user:IUser = req.body;

  const { classe } = user;

  const CHARACTERS = 3;

  if (!classe) {
    return res.status(400).json({ error: 'Classe is required' });
  }

  if (typeof classe !== 'string') {
    return res.status(422).json({ error: 'Classe must be a string' });
  }

  if (classe.length < CHARACTERS) {
    return res.status(422).json({ error: 'Classe must be longer than 2 characters' });
  }

  next();
};

export const levelValidate = (req : Request, res: Response, next: NextFunction) => {
  const user:IUser = req.body;

  const { level } = user;

  const CHARACTERS = 1;

  if (!level && level !== 0) {
    return res.status(400).json({ error: 'Level is required' });
  }

  if (typeof level !== 'number') {
    return res.status(422).json({ error: 'Level must be a number' });
  }

  if (level < CHARACTERS) {
    return res.status(422).json({ error: 'Level must be greater than 0' });
  }

  next();
};

export const passwordValidate = (req : Request, res: Response, next: NextFunction) => {
  const user:IUser = req.body;

  const { password } = user;

  const CHARACTERS = 8;

  if (!password) {
    return res.status(400).json({ error: 'Password is required' });
  }

  if (typeof password !== 'string') {
    return res.status(422).json({ error: 'Password must be a string' });
  }

  if (password.length < CHARACTERS) {
    return res.status(422).json({ error: 'Password must be longer than 7 characters' });
  }

  next();
};

export default {
  usernameValidate,
  classeValidate,
  levelValidate,
  passwordValidate,
};
