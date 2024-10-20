import { consult } from "../database/connection.js"

class TaskRepository {
    async List(id_board) {
        const sql = "SELECT * FROM tasks WHERE board_id = ?"

        const result = await consult(sql, [id_board])

        return result
    }
    
    async Insert(id_board, title, description) {
        const sql = "INSERT INTO tasks (board_id, title, description) VALUES (?, ?, ?)"

        const result = await consult(sql, [id_board, title, description])

        return { id_task: result.insertId }
    }

    async Delete(id_task) {
        const sql = "DELETE FROM tasks WHERE id = ?"

        await consult(sql, [id_task])

        return { id_task }
    }
}

export default new TaskRepository()
