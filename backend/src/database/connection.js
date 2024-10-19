import mysql from "mysql"

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
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
