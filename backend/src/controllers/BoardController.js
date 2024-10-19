import BoardService from "../services/BoardService.js"

class BoardController {
    async List(req, res) {
        const id_user = req.id_user

        const result = await BoardService.List(id_user)

        res.status(200).json(result)
    }
    
    async Insert(req, res) {
        const id_user = req.id_user
        const { title } = req.body

        const result = await BoardService.Insert(id_user, title)

        res.status(201).json(result)
    }
}

export default new BoardController()
