import path from 'path'
import morgan from 'morgan'
import express from 'express'
import { fileURLToPath } from 'url'
import bodyParser from 'body-parser'
import { format } from 'date-fns'

import { logger } from '@/utils/logger.ts'
import { MenuRouter } from './routes/menu.ts'
import { responseHandler } from './middlewares/responseHandler.ts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// ! 静态文件托管
/* app.use(express.static(path.join(__dirname, '../../hub-admin/robosen-admin-test')))
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../../hub-admin/robosen-admin-test/index.html'))
}) */

// ! 中间件

app.use(
	morgan((tokens, req, res) => {
		const localTime = format(new Date().getTime(), 'yyyy-MM-dd HH:mm:ss')
		return [`${localTime}`, tokens.method(req, res), tokens.url(req, res), tokens.status(req, res), '-', tokens['response-time'](req, res), 'ms'].join(' ')
	}),
)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(responseHandler)

// ! 路由
app.use('/menus', MenuRouter)

// 错误处理中间件
app.use((err: Error, req: ExpressRequest, res: ExpressResponse, next: ExpressNextFunction) => {
	logger.error(err.message, { stack: err.stack })
	res.status(500).json({ error: err.message })
})

// 启动服务器
const port = 7777
app.listen(port, () => {
	console.log(`Proxy server is running on http://localhost:${port}`)
})
