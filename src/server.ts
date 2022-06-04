import { SetupApplication } from './app'

class Server {
    static async start(): Promise<void> {
        process.on('SIGTERM', () => {
            process.exit()
        })

        const application = new SetupApplication(process.env.PORT || 3333)
        await application.init()
        await application.start()
    }
}

Server.start()
