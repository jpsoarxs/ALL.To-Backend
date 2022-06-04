import { Router } from 'express'

import HelloWordRouter from '@src/app/modules/Hello/index'

class Routes {
    static define(router: Router): Router {
        router.use('/hello-word', HelloWordRouter)

        return router
    }
}

export default Routes.define(Router())