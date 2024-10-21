import SubtaskService from "../services/SubtaskService.js"

class SubtaskController {
    async List(req, res) {
        const id_task = req.params.id_task

        const result = await SubtaskService.List(id_task)

        res.status(200).json(result)
    }
    
    async Insert(req, res) {
        const id_task = req.params.id_task
        const { title } = req.body

        const result = await SubtaskService.Insert(id_task, title)

        res.status(201).json(result)
    }

    async Edit(req, res) {
        const id_subtask = req.params.id_subtask
        const { is_done } = req.body

        const result = await SubtaskService.Edit(id_subtask, is_done)

        res.status(200).json(result)
    }

    async Delete(req, res) {
        const id_subtask = req.params.id_subtask

        const result = await SubtaskService.Delete(id_subtask)

        res.status(200).json(result)
    }
}

export default new SubtaskController()
