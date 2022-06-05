import { Response } from 'express'

import fs from 'fs'
import pdf from 'html-pdf'
import Mustache from 'mustache'


export class DocumentService {
    public async create(res: Response, model: string): Promise<void> {
        const html = fs.readFileSync(`./src/app/services/Documents/model/${model}.html`, 'utf8')
        const filledTemplate = Mustache.render(html, { teste: 'test' })
        pdf.create(filledTemplate).toStream((err, pdfStream) => {
            if (err) {
                return res.sendStatus(500)
            } else {
                res.statusCode = 200

                pdfStream.on('end', () => {
                    return res.end()
                })

                return pdfStream.pipe(res)
            }
        })
    }
}