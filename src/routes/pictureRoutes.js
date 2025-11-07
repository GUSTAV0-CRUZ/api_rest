import { Router } from 'express';

import PinctureControllers from '../controllers/pictureControllers';

const router = new Router();

router.post('/', PinctureControllers.create);

export default router;
