import { Request, Response, NextFunction } from 'express';
import { IUproduct } from '../interfaces/Product';

export const nameValidate = (req:Request, res:Response, next:NextFunction) => {
  const product: IUproduct = req.body;
  const { name } = product;
  const CHARACTERS = 3;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  if (typeof name !== 'string') {
    return res.status(422).json({ error: 'Name must be a string' });
  }

  if (name.length < CHARACTERS) {
    return res.status(422).json({ error: 'Name must be longer than 2 characters' });
  }

  next();
};

export const amountValidate = (req:Request, res:Response, next:NextFunction) => {
  const product: IUproduct = req.body;
  const { amount } = product;
  const CHARACTERS = 3;

  if (!amount) {
    return res.status(400).json({ error: 'Amount is required' });
  }

  if (typeof amount !== 'string') {
    return res.status(422).json({ error: 'Amount must be a string' });
  }

  if (amount.length < CHARACTERS) {
    return res.status(422).json({ error: 'Amount must be longer than 2 characters' });
  }

  next();
};

export default {
  nameValidate,
  amountValidate,
};
