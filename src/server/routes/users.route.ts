import { Router } from 'express';

import * as users from '../controllers/users.controller';

const router: Router = Router();

router.get('/users', users.getAllUsers);
router.get('/users/:id', users.getOneUser);
router.post('/users', users.saveOneUser);
router.put('/users/:id', users.updateOneUser);
router.delete('/users/:id', users.deleteOneUser);

export const UsersRoute: Router = router;