import "./Header.css"

const Header = ({ activeBoard, setShowAddTaskForm }) => {
    return (
        <header className="header">
            <h2>{activeBoard ? activeBoard.title : "Nenhum projeto selecionado"}</h2>

            <button className="btn" onClick={() => setShowAddTaskForm(true)}>+Adicionar tarefa</button>
        </header>
    )
}
  
export default Header
  