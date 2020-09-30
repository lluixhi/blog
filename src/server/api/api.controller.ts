import { Router, Request, Response } from 'express';

const router: Router = Router();

const mockResponse: any = {
    foo: 'bar',
    bar: 'foo'
};

router.get('/', (req: Request, res: Response) => {
    res.send(<JSON> mockResponse);
});

export const ApiController: Router = router;