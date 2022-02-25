import loginModel from '../models/loginModel';
import { generateToken } from '../middlewares/auth';
import { IULogin } from '../interfaces/Login'; 

export const getUserByLogin = async (user: IULogin) => {
  const { username, password } = user;

  const login = await loginModel({ username, password });

  if (login.length === 0) {
    return null;
  }

  const loginUser = Object.values(login)[0]; 
  /* Consultei o repositório do Vitor Lima para fazer a função getUserByLogin 
  link: https://github.com/tryber/sd-014-b-project-trybesmith/pull/9/commits/7da3ecd246c1932603bc8ef9f157a13d9d77a07f */

  const token = generateToken({ id: loginUser.id, username: loginUser.username });

  return token; 
};

export default getUserByLogin;