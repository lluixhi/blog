import { Router } from 'express';

import * as users from '../controllers/users.controller';

const router: Router = Router();

router.get('/', users.getAllUsers);
router.get('/:username', users.getUser);
router.post('/', users.saveUser);
router.put('/:username', users.updateUser);
router.delete('/:username', users.deleteUser);

export const UsersRoute: Router = router;