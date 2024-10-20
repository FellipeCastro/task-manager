import TaskRepository from "../respositories/TaskRepository.js"

class TaskService {
    async List(id_board) {
        const result = await TaskRepository.List(id_board)

        return result
    }
    
    async Insert(id_board, title, description) {
        const result = await TaskRepository.Insert(id_board, title, description)

        return result
    }

    async Delete(id_task) {
        const result = await TaskRepository.Delete(id_task)

        return result
    }
}

export default new TaskService()
