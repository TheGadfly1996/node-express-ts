import { validationResult } from 'express-validator'
import { Request, Response, NextFunction } from 'express'

export const handleRequestErrors = (req: Request, res: Response, next: NextFunction) => {
	// 检查token
	/* const token = req.headers['authorization']
	if (!token) {
		return res.json({
			code: 4001,
			msg: 'Token is missing',
			data: {},
		})
	} */

	// 检查请求参数验证结果
	const errors = validationResult(req)
	console.log('[ errors ] >', errors)
	if (!errors.isEmpty()) {
		return res.json({
			code: 3001,
			msg: '请求参数错误',
			data: errors.array(),
		})
	}

	// 如果没有错误，继续处理请求
	next()
}
