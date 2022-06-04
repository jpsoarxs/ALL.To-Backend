/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
module.exports = {
   type: "mongodb",
   host: process.env.DB_HOST,
   port: process.env.DB_PORT,
   database: process.env.DB_DATABASE,
   synchronize: true,
   logging: false,
   useUnifiedTopology: true,
   entities: [
      "src/entity/**/*.ts"
   ],
   migrations: ["src/database/migration/**/*.ts"
   ],
   subscribers: ["src/database/subscriber/**/*.ts"
   ],
   cli: {
      "entitiesDir": "src/database/entity", "migrationsDir": "src/database/migration", "subscribersDir": "src/database/subscriber"
   }
}