import { Router } from 'express'
import { Database } from '@/db/index.ts'
import { query, body, check, validationResult } from 'express-validator'

const db = new Database('menu.db')

const requireAllFields = (fields: string[]) => {
	return [...fields.map((field) => check(field).exists().withMessage(`${field} is required`))]
}

const MenuRouter: Router = Router()

MenuRouter.get('/', async (req, res, next) => {
	res.send({
		code: 2000,
		msg: '获取成功',
		data: [
			{
				path: '/home',
				name: 'Home',
				icon: 'i-ant-design:home-outlined',
			},
			{
				path: '/admin',
				name: 'Profile',
				icon: 'i-ant-design:profile-outlined',
				routes: [
					{
						path: '/menu',
						name: 'menu',
					},
					{
						path: '/unocss',
						name: 'unocss',
					},
					{
						path: '/TicTacToe',
						name: 'Tic-Tac-Toe',
					},
					{
						path: '/hooks-test',
						name: 'hooks-test',
					},
					{
						path: '/zustand',
						name: 'zustand',
					},
					{
						path: '/alipay',
						name: 'alipay',
					},
				],
			},
		],
	})
})
MenuRouter.post('/', requireAllFields(['menuType']), (req: ExpressRequest, res: ExpressResponse, next: ExpressNextFunction) => {
	const result = validationResult(req)
	if (!result.isEmpty()) {
		res.send({ code: 3001, msg: '请求参数错误', data: result })
	}
	res.send({
		code: 2000,
		msg: '创建成功',
		data: {},
	})
})

export { MenuRouter }
