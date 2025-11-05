import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';
import loginMiddleware from '../middlewares/loginMiddleware';

const router = new Router();

router.get('/', loginMiddleware, AlunoController.index);
router.post('/', loginMiddleware, AlunoController.create);
router.get('/:id', loginMiddleware, AlunoController.show);
router.put('/:id', loginMiddleware, AlunoController.update);
router.delete('/:id', loginMiddleware, AlunoController.delete);

export default router;
