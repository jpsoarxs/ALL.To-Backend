import { Router } from 'express';

import HelloWordRouter from '@modules/Products/index';

class Routes {
    static define(router: Router): Router {
        router.use('/hello-word', HelloWordRouter);

        return router;
    }
}

export default Routes.define(Router());