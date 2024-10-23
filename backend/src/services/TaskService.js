import TaskRepository from "../respositories/TaskRepository.js"

class TaskService {    
    async Insert(id_board, title, description) {
        const result = await TaskRepository.Insert(id_board, title, description)

        return result
    }

    async Delete(id_board, id_task) {
        const result = await TaskRepository.Delete(id_board, id_task)

        return result
    }
}

export default new TaskService()
