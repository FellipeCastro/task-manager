import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"

import "./Header.css"

const Header = ({ activeBoard, setShowAddTaskForm, setIsOpen }) => {
    return (
        <header className="header">
            <h2 onClick={() => setIsOpen(true)}><span><IoIosArrowDown /></span>{activeBoard ? activeBoard.title : "Nenhum projeto selecionado"}</h2>

            <button className="btn" onClick={() => setShowAddTaskForm(true)}>+Nova tarefa</button>
        </header>
    )
}
  
export default Header
  