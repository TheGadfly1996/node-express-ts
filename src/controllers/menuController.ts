import { Database } from '@/db/index.ts'
import path from 'path'

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

export const createMenu = async (req: ExpressRequest, res: ExpressResponse) => {
	const db = new Database('src/db/menu.db')

	const menuTypeMap = {
		1: '目录',
		2: '菜单',
		3: '按钮',
	}
	await db.run(
		`CREATE TABLE IF NOT EXISTS menus (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  parent_id INTEGER DEFAULT NULL,
  name TEXT NOT NULL,
  route TEXT NOT NULL,
  type TEXT CHECK (type IN ('1', '2', '3')),
  menu_order INTEGER NOT NULL DEFAULT 0
)`,
	)

	// 获取请求体中的数据
	const { parent_id = null, name, route, type, menu_order = 0 } = req.body

	// 插入数据
	db.run(
		`
	INSERT INTO menus (parent_id, name, route, type, menu_order)
	VALUES (?, ?, ?, ?, ?)
`,
		[parent_id, name, route, type, menu_order],
	)

	res.send({
		code: 2000,
		msg: '创建成功',
		data: {},
	})
}
