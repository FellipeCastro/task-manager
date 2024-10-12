import { FaCheck } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"

import "./TaskModal.css"

const TaskModal = () => {
    return (
        <>
            <div className="fade"></div>
            <div className="task-modal">
                <h4>Fazer tafera tal</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vitae quibusdam doloremque quisquam facere. Animi ab quo excepturi necessitatibus praesentium odit ducimus saepe! Voluptate, libero! Eius ducimus iste nemo officia.</p>

                <h5>Subtarefas (1 de 3)</h5>

                <div className="subtasks">
                    <div className="subtask done">
                        <button className="subtask-btn">
                            <FaXmark />
                        </button>

                        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </span>
                    </div>

                    <div className="subtask">
                        <button className="subtask-btn">
                            <FaCheck />
                        </button>

                        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </span>
                    </div>

                    <div className="subtask">
                        <button className="subtask-btn">
                            <FaCheck />
                        </button>

                        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </span>
                    </div>
                </div>
            </div>
        </>
    )
}
  
export default TaskModal
  