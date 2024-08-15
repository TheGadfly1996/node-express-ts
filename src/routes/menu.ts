// routes/menuRouter.ts
import { Router } from 'express'
import { check } from 'express-validator'
import { handleRequestErrors } from '@/middlewares/errorHandler'
import { getMenu, createMenu } from '@/controllers/menuController'

const requireAllFields = (fields: string[]) => {
	return [...fields.map((field) => check(field).exists().withMessage(`${field} is required`))]
}

const MenuRouter: Router = Router()

MenuRouter.get('/', getMenu)

MenuRouter.post('/', requireAllFields(['route', 'type', 'icon', 'name', 'parent_id']), handleRequestErrors, createMenu)

export { MenuRouter }
