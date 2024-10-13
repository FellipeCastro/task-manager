import "./MainBoard.css"

const MainBoard = ({ activeBoard, handleTaskClick }) => {
    if (!activeBoard) {
        return <div className="main-board"><h3>Selecione um projeto</h3></div>
    }

    const countCompletedSubtasks = (subtasks) => {
        return subtasks.filter((subtask) => subtask.isDone).length
    }

    const todoTasks = activeBoard.tasks.filter((task) => countCompletedSubtasks(task.subtasks) === 0)
    const doingTasks = activeBoard.tasks.filter((task) => {
        const completed = countCompletedSubtasks(task.subtasks)
        return completed > 0 && completed < task.subtasks.length
    })
    const doneTasks = activeBoard.tasks.filter((task) => countCompletedSubtasks(task.subtasks) === task.subtasks.length)

    return (
        <div className="main-board">
            <div className="column">
                <div className="title">
                    <span className="to-do"></span> <h3>Afazer ({todoTasks.length})</h3>
                </div>

                {todoTasks.map((task) => {
                    return (
                        <div key={task.id} className="task" onClick={() => handleTaskClick(task)}>
                            <h4>{task.title}</h4>
                            <span>{countCompletedSubtasks(task.subtasks)} de {task.subtasks.length} subtarefas</span>
                        </div>
                    )
                })}
                {todoTasks.length === 0 && <p className="msg">Não há tarefas a serem feitas</p>}
            </div>
            <div className="column">
                <div className="title">
                    <span className="doing"></span> <h3>Fazendo ({doingTasks.length})</h3>
                </div>

                {doingTasks.map((task) => {
                    return (
                        <div key={task.id} className="task" onClick={() => handleTaskClick(task)}>
                            <h4>{task.title}</h4>
                            <span>{countCompletedSubtasks(task.subtasks)} de {task.subtasks.length} subtarefas</span>
                        </div>
                    )
                })}
                {doingTasks.length === 0 && <p className="msg">Não há tarefas a sendo feitas</p>}
            </div>
            <div className="column">
                <div className="title">
                    <span className="done"></span> <h3>Feito ({doneTasks.length})</h3>
                </div>

                {doneTasks.map((task) => {
                    return (
                        <div key={task.id} className="task" onClick={() => handleTaskClick(task)}>
                            <h4>{task.title}</h4>
                            <span>{countCompletedSubtasks(task.subtasks)} de {task.subtasks.length} subtarefas</span>
                        </div>
                    )
                })}
                {doneTasks.length === 0 && <p className="msg">Não há tarefas feitas</p>}
            </div>
        </div>
    )
}
  
export default MainBoard
  