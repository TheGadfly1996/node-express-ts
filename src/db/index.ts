import sqlite3 from 'sqlite3'

// 使 sqlite3 支持更详细的错误信息
const Sqlite = sqlite3.verbose()

export class Database {
	private db: sqlite3.Database

	constructor(filename: string) {
		this.db = new Sqlite.Database(filename, (err) => {
			if (err) {
				console.error('Could not connect to the database:', err.message)
			} else {
				console.log('Connected to the SQLite database.')
			}
		})
	}
	// 执行SQL语句
	public run(sql: string, params: any[] = []): Promise<void> {
		return new Promise((resolve, reject) => {
			this.db.run(sql, params, function (err) {
				if (err) {
					reject(err)
				} else {
					resolve()
				}
			})
		})
	}

	// 查询数据
	public query(sql: string, params: any[] = []): Promise<any[]> {
		return new Promise((resolve, reject) => {
			this.db.all(sql, params, (err, rows) => {
				if (err) {
					reject(err)
				} else {
					resolve(rows)
				}
			})
		})
	}

	// 关闭数据库连接
	public close(): Promise<void> {
		return new Promise((resolve, reject) => {
			this.db.close((err) => {
				if (err) {
					reject(err)
				} else {
					resolve()
				}
			})
		})
	}
}
