import { Router } from 'express';

import * as authControl from '../controllers/auth.controller';

const router: Router = Router();

router.post('/login', authControl.login);
router.post('/logout', authControl.logout);
router.get('/checkLogin', authControl.okay);

export const AuthRoute: Router = router;