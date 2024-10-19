import BoardRepository from "../respositories/BoardRepository.js"

class BoardService {
    async List(id_user) {
        const result = await BoardRepository.List(id_user)
        
        return result
    }
    
    async Insert(id_user, title) {
        const result = await BoardRepository.Insert(id_user, title)

        return result
    }
}

export default new BoardService()
