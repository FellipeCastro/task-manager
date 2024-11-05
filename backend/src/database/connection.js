import mysql from "mysql2"

const connection = mysql.createConnection({
    host: "autorack.proxy.rlwy.net",
    port: "44331",
    user: "root",
    password: "qZJmGZeaDIIccNpkDqysbdINRqFYmNLv",
    database: "task_manager_db"
})

connection.connect()

export const consult = (command, params) => {
    return new Promise((resolve, reject) => {
        connection.query(command, params, (error, result) => {
            if (error) return reject(error)
            const row = JSON.parse(JSON.stringify(result))
            return resolve(row)
        })
    })
}

export default connection
