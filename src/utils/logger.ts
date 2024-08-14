import winston from 'winston'
import { format } from 'date-fns'

// ! 设置winston日志记录器
export const logger = winston.createLogger({
	level: 'error',
	format: winston.format.combine(
		winston.format.colorize(),
		winston.format.timestamp(),
		winston.format.printf(({ timestamp, level, message, stack }) => {
			const localTime = format(timestamp, 'yyyy-MM-dd HH:mm:ss')
			return `${localTime} ${level}: ${message} - ${stack}`
		}),
	),
	transports: [new winston.transports.Console(), new winston.transports.File({ filename: 'error.log' })],
})
