import { MdOutlineDashboard } from "react-icons/md"

import "./Sidebar.css"

const Sidebar = () => {
    return (
        <aside className="aside">
            <h1>TaskManager</h1>
            <span>Todos projetos (8)</span>

            <div className="boards">
                <div className="board active">
                    <MdOutlineDashboard /> Lançamento da nova plataforma
                </div>
                <div className="board">
                    <MdOutlineDashboard /> Lançamento da nova plataforma
                </div>
                <div className="board">
                    <MdOutlineDashboard /> Lançamento da nova plataforma
                </div>
                <div className="board new-board">
                    <MdOutlineDashboard /> +Criar novo projeto
                </div>
            </div>
        </aside>
    )
}
  
export default Sidebar
  