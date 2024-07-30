// global.d.ts
import { Request, Response, NextFunction, Router } from 'express'

declare global {
	type ExpressRequest = Request
	type ExpressResponse = Response
	type ExpressNextFunction = NextFunction
	type ExpressRouter = Router
}
