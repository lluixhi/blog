import { Router } from 'express';

import * as authentication from '../controllers/auth.controller';

const router: Router = Router();

router.post('/login', authentication.login);

export const AuthRoute: Router = router;