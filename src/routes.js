import binary from './binary/index.js'
import error from './error/index.js'

export default (app) => {
    app.use('/binary', binary)
    app.use('/error', error)
}

