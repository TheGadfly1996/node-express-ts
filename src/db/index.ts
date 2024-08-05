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

	// 插入数据
	public insert(sql: string, params: any[]): Promise<void> {
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

	// 更新数据
	public update(sql: string, params: any[]): Promise<void> {
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

	// 删除数据
	public delete(sql: string, params: any[]): Promise<void> {
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

// 使用示例
const db = new Database('menu.db')

// 查询数据
db.query('SELECT * FROM users')
	.then((rows) => console.log(rows))
	.catch((err) => console.error('Error querying data:', err))

// 插入数据
db.insert('INSERT INTO users (name, age) VALUES (?, ?)', ['Alice', 30])
	.then(() => console.log('Data inserted successfully'))
	.catch((err) => console.error('Error inserting data:', err))

// 更新数据
db.update('UPDATE users SET age = ? WHERE name = ?', [31, 'Alice'])
	.then(() => console.log('Data updated successfully'))
	.catch((err) => console.error('Error updating data:', err))

// 删除数据
db.delete('DELETE FROM users WHERE name = ?', ['Alice'])
	.then(() => console.log('Data deleted successfully'))
	.catch((err) => console.error('Error deleting data:', err))

// 关闭数据库连接
db.close()
	.then(() => console.log('Database connection closed'))
	.catch((err) => console.error('Error closing database connection:', err))
