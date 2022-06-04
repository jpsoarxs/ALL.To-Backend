import { Router } from 'express'

import Auth from '@src/app/modules/Auth/index'
import User from '@src/app/modules/User/index'

class Routes {
    static define(router: Router): Router {
        router.use('/auth', Auth)
        router.use('/user', User)

        return router
    }
}

export default Routes.define(Router())