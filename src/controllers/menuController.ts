import { Database } from '@/db/index.ts'
const db = new Database('menu.db')

export const getMenu = (req: ExpressRequest, res: ExpressResponse) => {
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
}

export const createMenu = (req: ExpressRequest, res: ExpressResponse) => {
	res.send({
		code: 2000,
		msg: '创建成功',
		data: {},
	})
}
