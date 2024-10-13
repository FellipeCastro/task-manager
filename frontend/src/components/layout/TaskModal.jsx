import { FaCheck, FaTrashAlt } from "react-icons/fa"

import "./TaskModal.css"

const TaskModal = ({ task, setShowTaskModal, updateTask, deleteTask }) => {
    if (!task) return null
    const countCompletedSubtasks = (subtasks) => {
        return subtasks.filter((subtask) => subtask.isDone).length
    }

    // estudar
    const toggleSubtask = (subtaskId) => {
        const updatedSubtasks = task.subtasks.map((subtask) =>
            subtask.id === subtaskId ? { ...subtask, isDone: !subtask.isDone } : subtask
        )
        const updatedTask = { ...task, subtasks: updatedSubtasks }

        // Chama a função de atualização de task no componente App
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
