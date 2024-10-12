import { FaXmark } from "react-icons/fa6"

import "./AddTaskForm.css"

const AddTaskForm = () => {
    return (
        <>
            <div className="fade"></div>
            <div className="add-task-form">
                <h2>Adicionar nova tarefa</h2>

                <form method="post" className="form">
                    <div className="input-container">
                        <label htmlFor="title">Titulo</label>
                        <input type="text" name="title" id="title" placeholder="Digite o titulo da tarefa aqui" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="description">Descrição</label>
                        <textarea name="description" id="description" placeholder="Digite a descrição aqui"></textarea>
                    </div>
                    <span>Subtarefas</span>
                    <div className="sub-container">
                        <div className="input-sub-container">
                            <input type="text" name="subtask" placeholder="Digite sua subtarefa aqui" />
                            <button className="delete-sub">
                                <FaXmark />
                            </button>
                        </div>
                        <div className="input-sub-container">
                            <input type="text" name="subtask" placeholder="Digite sua subtarefa aqui" />
                            <button className="delete-sub">
                                <FaXmark />
                            </button>
                        </div>
                    </div>
                    <button className="new-sub-btn">+Adicionar nova subtarefa</button>
                    <button className="submit-btn">Criar tarefa</button>
                </form>
            </div>
        </>
    )
}
  
export default AddTaskForm
  