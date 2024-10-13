import { FaCheck, FaTrashAlt } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"

import "./TaskModal.css"

const TaskModal = ({ task, setShowTaskModal }) => {
    if (!task) return null
    const countCompletedSubtasks = (subtasks) => {
        return subtasks.filter((subtask) => subtask.isDone).length;
    }

    return (
        <>
            <div className="fade" onClick={() => setShowTaskModal(false)}></div>
            <div className="task-modal">
                <div className="title-container">
                    <h4>{task.title}</h4>

                    <button className="delete-task-btn">
                        <FaTrashAlt />
                    </button>
                </div>
                <p>{task.description}</p>

                <h5>Subtarefas ({countCompletedSubtasks(task.subtasks)} de {task.subtasks.length})</h5>

                <div className="subtasks">
                    {task.subtasks.map((subtask) => {
                        return (
                            <div key={subtask.id} className={`subtask ${subtask.isDone ? "done" : ""}`}>
                                <button className="subtask-btn">
                                    {subtask.isDone ? <FaXmark /> : <FaCheck />}
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
