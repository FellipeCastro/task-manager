import { FaCheck, FaTrashAlt } from "react-icons/fa"

import "./TaskModal.css"

const TaskModal = ({ task, setShowTaskModal, updateTask, deleteTask }) => {
    // Verifica se a taks existe
    if (!task) return null

    // Função que conta quantas subtarefas foram concluídas
    const countCompletedSubtasks = (subtasks) => {
        // Filtra as subtarefas e retorna apenas as concluídas
        return subtasks.filter((subtask) => subtask.isDone).length
    }

    // Função para alternar o estado de conclusão (isDone) de uma subtarefa
    const toggleSubtask = (subtaskId) => {
        // Mapeia as subtarefas e alterna o valor de 'isDone' da subtarefa correspondente ao ID
        const updatedSubtasks = task.subtasks.map((subtask) =>
            subtask.id === subtaskId ? { ...subtask, isDone: !subtask.isDone } : subtask
        )

        // Cria uma nova tarefa com as subtarefas atualizadas
        const updatedTask = { ...task, subtasks: updatedSubtasks }

        // Chama a função updateTask para atualizar a tarefa com as subtarefas modificadas
        updateTask(updatedTask)
    }


    return (
        <>
            <div className="fade" onClick={() => setShowTaskModal(false)}></div>
            <div className="task-modal">
                <div className="title-container">
                    <h4>{task.title}</h4>

                    <button className="delete-task-btn" onClick={() => deleteTask(task.id)}>
                        <FaTrashAlt />
                    </button>
                </div>
                <p>{task.description}</p>

                <h5>Subtarefas ({countCompletedSubtasks(task.subtasks)} de {task.subtasks.length})</h5>

                <div className="subtasks">
                    {task.subtasks.map((subtask) => {
                        return (
                            <div key={subtask.id} className={`subtask ${subtask.isDone ? "done" : ""}`}>
                                <button className="subtask-btn" onClick={() => toggleSubtask(subtask.id)}>
                                    {subtask.isDone ? <FaCheck /> : ""}
                                </button>
                                <span>{subtask.title}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default TaskModal
