import { consult } from "../database/connection.js"

class BoardRepository {
    async List(id_user) {
        const sql = "SELECT * FROM boards WHERE user_id = ?"

        const result = await consult(sql, [id_user])

        return result
    }
    
    async Insert(id_user, title) {
        const sql = "INSERT INTO boards (user_id, title) VALUES (?, ?)"

        const result = await consult(sql, [id_user, title])

        return { id_board: result.insertId }
    }

    async Delete(id_board) {
        const sql = "DELETE FROM boards WHERE id = ?"

        await consult(sql, [id_board])

        return { id_board }
    }
}

export default new BoardRepository()
