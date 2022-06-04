/* eslint-disable @typescript-eslint/no-unused-vars */
import { Logger, QueryRunner } from "typeorm"

export class MyCustomLogger implements Logger {
    logQueryError(error: string | Error, query: string, parameters?: any[] | undefined, queryRunner?: QueryRunner | undefined) {
        global.logger.error(`Database query error: ${error}`)
        throw new Error("Method not implemented.")
    }
    logQuerySlow(time: number, query: string, parameters?: any[] | undefined, queryRunner?: QueryRunner | undefined) {
        global.logger.error(`Database query slow: ${time}`)
        throw new Error("Method not implemented.")
    }
    logSchemaBuild(message: string, queryRunner?: QueryRunner | undefined) {
        global.logger.info(`Database schema build: ${message}`)
        throw new Error("Method not implemented.")
    }
    logMigration(message: string, queryRunner?: QueryRunner | undefined) {
        global.logger.info(`Database migration: ${message}`)
        throw new Error("Method not implemented.")
    }
    log(level: "log" | "info" | "warn", message: any, queryRunner?: QueryRunner | undefined) {
        global.logger.info(`Database log: ${message}`)
        throw new Error("Method not implemented.")
    }
    logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner) {
        const requestUrl = queryRunner && queryRunner.data["request"] ? "(" + queryRunner.data["request"].url + ") " : ""
        global.logger.info(`Database query: ${query}`)
    }
}