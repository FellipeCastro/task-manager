import "./AddTaskForm.css"

const AddBoardForm = () => {
    return (
        <>
            <div className="fade"></div>
            <div className="add-task-form">
                <h2>Adicionar novo projeto</h2>

                <form method="post" className="form">
                    <div className="input-container">
                        <label htmlFor="title">Titulo</label>
                        <input type="text" name="title" id="title" placeholder="Digite o titulo do projeto aqui" />
                    </div>
                    <button className="submit-btn">Criar projeto</button>
                </form>
            </div>
        </>
    )
}
  
export default AddBoardForm
  