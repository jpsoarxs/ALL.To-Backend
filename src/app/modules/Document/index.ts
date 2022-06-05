import { Router, Request, Response } from 'express'
import { DocumentService } from '@services/Documents/index'

const router = Router()

router.post('/create', async (req: Request, res: Response) => {
    try {
        const documentService = new DocumentService()
        const result = await documentService.create(res, 'invoice')

        return result
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({
                error: error.message
            })
        }
        return res.status(500).json({
            error: 'Something went wrong'
        })
    }
})

export default router