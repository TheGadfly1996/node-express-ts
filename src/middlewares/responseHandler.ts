import { Request, Response, NextFunction } from 'express'

export const responseHandler = (req: Request, res: Response, next: NextFunction) => {
	// Save the original send function
	const originalSend = res.send

	// Override the send method
	res.send = function (body: any) {
		if (typeof body !== null) {
			return originalSend.call(this, body)
		}
		return originalSend.call(this, body)
	}

	// Proceed to the next middleware or route handler
	next()
}
