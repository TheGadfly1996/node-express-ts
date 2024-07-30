import 'express'

declare module 'express' {
	interface Response {
		send(body: { code: number; msg: string; data: any }): this
	}
}
