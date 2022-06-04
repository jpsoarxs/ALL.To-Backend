import { Router } from 'express'

import Auth from '@src/app/modules/Auth/index'
import Cars from '@src/app/modules/Cars/index'

class Routes {
    static define(router: Router): Router {
        router.use('/auth', Auth)
        router.use('/cars', Cars)

        return router
    }
}

export default Routes.define(Router())