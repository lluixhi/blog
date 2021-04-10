import { Router } from 'express';

import * as users from '../controllers/users.controller';
import { withAuth } from '../controllers/auth.controller';

const router: Router = Router();

router.get('/', withAuth, users.getAllUsers);
router.get('/:username', withAuth, users.getUser);
router.post('/', withAuth, users.saveUser);
router.put('/:username', withAuth, users.updateUser);
router.delete('/:username', withAuth, users.deleteUser);

export const UsersRoute: Router = router;