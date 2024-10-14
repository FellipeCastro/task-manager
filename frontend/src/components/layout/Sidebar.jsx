import { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";

import "./Sidebar.css";

const Sidebar = ({ boards, activeBoardId, setActiveBoardId, deleteBoard, setShowAddBoardForm }) => {
    // Função para mudar o board ativo
    const toggleBoard = (id) => {
        setActiveBoardId(id)
    }

    return (
        <aside className="aside">
            <h1>TaskManager</h1>
            <span>Todos projetos ({boards.length})</span>

            <div className="boards">
                {boards.map((board) => {
                    return (
                        <div key={board.id} className={`board ${activeBoardId === board.id ? 'active' : ''}`} onClick={() => toggleBoard(board.id)}>
                            <MdOutlineDashboard /> <span>{board.title}</span>

                            <button className="delete-btn" onClick={() => {deleteBoard(board.id)}}>
                                <FaTrashAlt />
                            </button>
                        </div>
                    );
                })}

                <div className="board new-board" onClick={() => setShowAddBoardForm(true)}>
                    <MdOutlineDashboard /> <span>+Criar novo projeto</span>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
