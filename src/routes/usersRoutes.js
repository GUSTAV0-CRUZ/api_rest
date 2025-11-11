import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import loginMiddleware from '../middlewares/loginMiddleware';

const router = new Router();

router.post('/', UsersController.create);
router.put('/', loginMiddleware, UsersController.update);
router.delete('/', loginMiddleware, UsersController.delete);

export default router;
