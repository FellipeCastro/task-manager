import { consult } from "../database/connection.js"

class TaskRepository {    
    async Insert(id_board, title, description) {
        const sql = "INSERT INTO tasks (board_id, title, description) VALUES (?, ?, ?)"

        const result = await consult(sql, [id_board, title, description])

        return { id_task: result.insertId }
    }

    async Delete(id_board, id_task) {
        const sql = "DELETE FROM tasks WHERE id = ? AND board_id = ?"

        await consult(sql, [id_task, id_board])

        return { id_task }
    }
}

export default new TaskRepository()
