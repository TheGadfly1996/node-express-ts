import { Router } from 'express'

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

export { MenuRouter }
