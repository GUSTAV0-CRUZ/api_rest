import { Router } from 'express';
import HomeController from '../controllers/HomeController';
import loginMiddleware from '../middlewares/loginMiddleware';

const router = new Router();

router.get('/', loginMiddleware, HomeController.index);
router.post('/aluno/', loginMiddleware, HomeController.create);
router.get('/aluno/:id', loginMiddleware, HomeController.show);
router.put('/aluno/:id', loginMiddleware, HomeController.update);
router.delete('/aluno/:id', loginMiddleware, HomeController.delete);

export default router;
