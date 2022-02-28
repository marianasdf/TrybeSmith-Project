import express from 'express';
import { createUserControler } from './controllers/userController';
import { getUserByLoginController } from './controllers/loginController';
import { 
  usernameValidate, 
  classeValidate, 
  levelValidate, 
  passwordValidate, 
} from './middlewares/userValidate';

import { loginValidate } from './middlewares/loginValidate';
import { createProductController } from './controllers/productController';
import { nameValidate, amountValidate } from './middlewares/productValidate';
import { tokenValidate } from './middlewares/tokenValidate';

const app = express();

app.use(express.json());

app.post(
  '/users',
  usernameValidate,
  classeValidate,
  levelValidate,
  passwordValidate,
  createUserControler,
);

app.post(
  '/login',
  loginValidate,
  getUserByLoginController,
);

app.post(
  '/products',
  nameValidate,
  amountValidate,
  tokenValidate,
  createProductController,
);

export default app;
