/* eslint-disable no-console */
import './util/module-alias'
import express from 'express'
import bodyParser from 'body-parser'
import { Server } from 'http'
import router from './router'

import "reflect-metadata"
import { createConnections } from "typeorm"

import { auth } from './middlewares/auth'

import { Logger } from "tslog"
global.logger = new Logger({ name: "app", displayFilePath: 'hidden', displayFunctionName: false })
export class SetupApplication {
    private server?: Server

    constructor(private port: any = 3000, public app = express()) { }

    public async init(): Promise<void> {
        await this.setupDatabase()
        await this.setupExpress()
        await this.setupRoutes()
    }

    private async setupDatabase(): Promise<void> {
        global.logger.info(`Starting database setup`)
        try {
            await createConnections()
            global.logger.info(`Database connected successfully`)
        } catch (error) {
            global.logger.error(`Connection to database failed: ${error}`)
        }
    }

    private async setupRoutes(): Promise<void> {
        this.app.use('/api', auth)
        this.app.use('/api', router)

        global.logger.info(`Routes setuped successfully`)
    }

    private async setupExpress(): Promise<void> {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: true }))

        global.logger.info(`Express setuped successfully`)
    }

    public async start(): Promise<void> {
        this.server = this.app.listen(this.port, () => {
            global.logger.info(`Application started on port ${this.port}`)
        })
    }
}