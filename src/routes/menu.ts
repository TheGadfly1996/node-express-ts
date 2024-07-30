import { Router } from 'express'

const MenuRouter: Router = Router()

MenuRouter.get('/', async (req, res, next) => {
	res.send({
		code: 2000,
		msg: '获取成功',
		data: {
			list: [1, 2, 3],
		},
	})
})

export { MenuRouter }
