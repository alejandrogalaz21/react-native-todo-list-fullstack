import { config as dotenv } from 'dotenv'

dotenv()

export const config = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_DATABASE || 'test',
  port: process.env.PORT || 5000,
  env: process.env.ENVIRONMENT || 'development'
}
