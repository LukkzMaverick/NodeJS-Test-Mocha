import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import binary from './binary/index.js'
import routes from './routes.js'

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.listen(3000, () => console.log('Express has been started'))

routes(app)

export default app