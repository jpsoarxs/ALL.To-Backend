import { SetupApplication } from './app'

class Server {
    static start(): void {
        const application = new SetupApplication(process.env.PORT || 3333)
        application.init()
        application.start()
    }
}

Server.start()
