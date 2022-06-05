import { Router } from 'express'

import Auth from '@src/app/modules/Auth/index'
import User from '@src/app/modules/User/index'
import Document from '@src/app/modules/Document/index'

class Routes {
    static define(router: Router): Router {
        router.use('/auth', Auth)
        router.use('/user', User)
        router.use('/document', Document)

        return router
    }
}

export default Routes.define(Router())