import express from 'express'
import compression from 'compression'
import cors from 'cors'
import morgan from 'morgan'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

import { options } from './swaggerOptions'
import { config } from './config'
import router from './router'

const app = express()
const specs = swaggerJSDoc(options)

// set port
app.set('port', config.port)
// makes /foo and /Foo the same
app.set('case sensitive routing', false)
// makes /foo and /foo/ the same
app.set('strict routing', false)
// # of spaces to indent prettified json
app.set('json spaces', 2)

// set up all middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// set up the router
app.use('/api', router)
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(specs))

export default app
