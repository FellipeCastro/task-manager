import SubtaskRepository from "../respositories/SubtaskRepository.js"

class SubtaskService {
    async List(id_task) {
        const result = await SubtaskRepository.List(id_task)

        return result
    }
    
    async Insert(id_task, title) {
        const result = await SubtaskRepository.Insert(id_task, title)

        return result
    }

    async Edit(id_subtask, is_done) {
        const result = await SubtaskRepository.Edit(id_subtask, is_done)

        return result
    }

    async Delete(id_subtask) {
        const result = await SubtaskRepository.Delete(id_subtask)

        return result
    }
}

export default new SubtaskService()
