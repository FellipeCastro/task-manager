import { useState } from "react"

import "./AddTaskForm.css"

const AddBoardForm = ({ setShowAddBoardForm, addBoard }) => {
    const [newBoardTitle, setNewBoardTitle] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        addBoard(newBoardTitle)
        setShowAddBoardForm(false)
    }

    return (
        <>
            <div className="fade" onClick={() => setShowAddBoardForm(false)}></div>
            <div className="add-task-form">
                <h2>Adicionar novo projeto</h2>

                <form method="post" className="form" onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label htmlFor="title">Titulo</label>
                        <input type="text" name="title" id="title" placeholder="Digite o titulo do projeto aqui" value={newBoardTitle} onChange={(e) => setNewBoardTitle(e.target.value)} />
                    </div>
                    <button type="submit" className="submit-btn">Criar projeto</button>
                </form>
            </div>
        </>
    )
}
  
export default AddBoardForm
  