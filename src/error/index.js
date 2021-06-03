import { Router } from 'express'

const router = Router()

router.post('/', (req, res) => {
    return res.status(500).json({
        msg: 'Internal Server Error',
        error: {}
    })
})

export default router