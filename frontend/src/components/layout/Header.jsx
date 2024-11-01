import { Link } from "react-router-dom"
import { IoIosArrowDown, IoMdPerson } from "react-icons/io"

import "./Header.css"

const Header = ({ activeBoard, setShowAddTaskForm, setIsOpen }) => {
    return (
        <header className="header">
            <h2 onClick={() => setIsOpen(true)}><span><IoIosArrowDown /></span>{activeBoard ? activeBoard.title : "Nenhum painel selecionado"}</h2>

            <div className="btns-container">
                <button className="btn" onClick={() => setShowAddTaskForm(true)}>+Nova tarefa</button>
                <Link to="/profile" className="profile-btn">
                    <IoMdPerson />
                </Link>
            </div>
        </header>
    )
}
  
export default Header
  