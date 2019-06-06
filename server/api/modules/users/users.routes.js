import { Router } from 'express';
import * as userHandler from './users.handler';

export function init(api){
  const router = new Router();
  router.get('/', userHandler.getAllUsers);
  router.post('add', userHandler.addUser);
  api.use('/users', router);
}
