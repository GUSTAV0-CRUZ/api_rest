import { Router } from 'express';
import loginMiddleware from '../middlewares/loginMiddleware';
import PinctureControllers from '../controllers/pictureControllers';

const router = new Router();

router.post('/', loginMiddleware, PinctureControllers.create);

export default router;
