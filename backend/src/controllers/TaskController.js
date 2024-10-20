import TaskService from "../services/TaskService.js"

class TaskController {
    async List(req, res) {
        const id_board = req.params.id_board

        const result = await TaskService.List(id_board)

        res.status(200).json(result)
    }
    
    async Insert(req, res) {
        const id_board = req.params.id_board
        const { title, description } = req.body

        const result = await TaskService.Insert(id_board, title, description)

        res.status(201).json(result)
    }

    async Delete(req, res) {
        const id_task = req.params.id_task

        const result = await TaskService.Delete(id_task)

        res.status(200).json(result)
    }
}

export default new TaskController()
