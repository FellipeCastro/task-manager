import { useState, useEffect } from "react"
import Header from "./components/layout/Header"
import MainBoard from "./components/layout/MainBoard"
import Sidebar from "./components/layout/Sidebar"
import AddBoardForm from "./components/layout/AddBoardForm"
import AddTaskForm from "./components/layout/AddTaskForm"
import TaskModal from "./components/layout/TaskModal"

const App = () => {
  const [boards, setBoards] = useState([])
  const [activeBoardId, setActiveBoardId] = useState(null)
  const [showAddBoardForm, setShowAddBoardForm] = useState(false)
  const [showAddTaskForm, setShowAddTaskForm] = useState(false)
  const [showTaskModal, setShowTaskModal] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json')
      const result = await response.json()
      setBoards(result.boards)
    }

    fetchData()
  }, [])

  const deleteBoard = (id) => {
    const updatedBoards = boards.filter(board => board.id !== id)
    setBoards(updatedBoards)

    // Se o board ativo for deletado, resetamos o activeBoardId
    if (activeBoardId === id) {
      setActiveBoardId(null)
    }
  }

  const addBoard = (newBoardTitle) => {
    const newBoard = {
      id: boards.length + 1, 
      title: newBoardTitle,
      tasks: [], 
    }

    setBoards([...boards, newBoard])
    setActiveBoardId(newBoard.id)
  }

  const activeBoard = boards.find((board) => board.id === activeBoardId)

  const handleTaskClick = (task) => {
    setSelectedTask(task)
    setShowTaskModal(true)
  }

  return (
    <>
      <Sidebar
        boards={boards}
        activeBoardId={activeBoardId}
        setActiveBoardId={setActiveBoardId}
        deleteBoard={deleteBoard}
        setShowAddBoardForm={setShowAddBoardForm}
      />

      <div className="container">
        <Header activeBoard={activeBoard} setShowAddTaskForm={setShowAddTaskForm} />
        <MainBoard activeBoard={activeBoard} handleTaskClick={handleTaskClick} />
      </div>

      {showAddBoardForm && <AddBoardForm setShowAddBoardForm={setShowAddBoardForm} addBoard={addBoard} />}
      {showAddTaskForm && <AddTaskForm setShowAddTaskForm={setShowAddTaskForm} />}
      {showTaskModal && <TaskModal task={selectedTask} setShowTaskModal={setShowTaskModal} />}
    </>
  )
}

export default App
