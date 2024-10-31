import { useState, useEffect } from "react"

// Componentes
import Header from "../layout/Header"
import MainBoard from "../layout/MainBoard"
import Sidebar from "../layout/Sidebar"
import AddBoardForm from "../layout/AddBoardForm"
import AddTaskForm from "../layout/AddTaskForm"
import TaskModal from "../layout/TaskModal"
import Footer from "../layout/Footer"

import api from "../../constants/api"

const Home = () => {
  const [boards, setBoards] = useState([])
  const [activeBoardId, setActiveBoardId] = useState(null)
  const [showAddBoardForm, setShowAddBoardForm] = useState(false)
  const [showAddTaskForm, setShowAddTaskForm] = useState(false)
  const [showTaskModal, setShowTaskModal] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  
  const fetchData = async () => {
    const response = await api.get("/boards/overview")
    const result = await response.data

    if (result.length > 0) {
      setActiveBoardId(result[0].id)
    }

    setBoards(result)
  }

  const deleteBoard = async (id) => {
    const response = await api.delete(`/boards/${id}`)
    const result = await response.data

    if (result) {
      fetchData()
    }

    // Se o board ativo for deletado, resetamos o activeBoardId
    if (activeBoardId === id) {
      setActiveBoardId(null)
    }

    setIsOpen(false)
  }

  const addBoard = async (title) => {
    const response = await api.post("/boards", {
      title
    })
    const result = await response.data

    if (result) {
      fetchData()
      setActiveBoardId(newBoard.id)
      setIsOpen(false)
    }
  }

  // Definindo board ativo com base no activeBoardId
  const activeBoard = boards.find((board) => board.id === activeBoardId)

  // Função para mostrar o modal da tarefa clicada
  const handleTaskClick = (task) => {
    setSelectedTask(task)
    setShowTaskModal(true)
  }

  const updateTask = (updatedTask) => {
    const updatedBoards = boards.map((board) => {
      // Verifica se o board é o ativo
      if (board.id === activeBoardId) {
        return {
          ...board,
          // Atualiza a lista de tarefas do board
          tasks: board.tasks.map((task) =>
            // Substitui a tarefa correspondente pelo updatedTask
            task.id === updatedTask.id ? updatedTask : task
          )
        }
      }
      // Se o board não for o ativo, retorna o board original
      return board
    })
    // Atualiza a lista de boards com o board que contém a tarefa atualizada
    setBoards(updatedBoards)
    // Define a tarefa selecionada como a tarefa atualizada
    setSelectedTask(updatedTask)
  }


  const deleteTask = (taskId) => {
    const updatedBoards = boards.map((board) => {
      // Verifica se o board é o ativo
      if (board.id === activeBoardId) {
        return {
          ...board,
          // Remove a tarefa com o ID correspondente da lista de tarefas
          tasks: board.tasks.filter((task) => task.id !== taskId)
        }
      }
      // Se o board não for o ativo, retorna o board original
      return board
    })
    // Atualiza a lista de boards sem a tarefa deletada
    setBoards(updatedBoards)
    // Fecha o modal de exibição de tarefas
    setShowTaskModal(false)
  }


  const addTask = (newTask) => {
    const updatedBoards = boards.map((board) => {
      // Verifica se o board é o ativo
      if (board.id === activeBoardId) {
        return {
          ...board,
          // Adiciona a nova tarefa à lista de tarefas
          tasks: [...board.tasks, newTask],
        }
      }
      // Se o board não for o ativo, retorna o board original
      return board
    })
    // Atualiza a lista de boards com a nova tarefa adicionada
    setBoards(updatedBoards)
  }

  const toggleMode = () => {
    setDarkMode(!darkMode)
    const html = document.querySelector("html")
    html.classList.toggle("light-mode")
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="container">
        <Sidebar
          boards={boards}
          activeBoardId={activeBoardId}
          setActiveBoardId={setActiveBoardId}
          deleteBoard={deleteBoard}
          setShowAddBoardForm={setShowAddBoardForm}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          darkMode={darkMode}
          toggleMode={toggleMode}
        />
        <div className="main-container">
          <Header
            activeBoard={activeBoard}
            setShowAddTaskForm={setShowAddTaskForm}
            setIsOpen={setIsOpen}
          />
          <MainBoard
            activeBoard={activeBoard}
            handleTaskClick={handleTaskClick}
          />
        </div>
      </div>

      <Footer />

      {showAddBoardForm && (
        <AddBoardForm
          setShowAddBoardForm={setShowAddBoardForm}
          addBoard={addBoard}
        />
      )}
      {showAddTaskForm && (
        <AddTaskForm
          setShowAddTaskForm={setShowAddTaskForm}
          addTask={addTask}
          activeBoardId={activeBoardId}
        />
      )}
      {showTaskModal && (
        <TaskModal
          task={selectedTask}
          setShowTaskModal={setShowTaskModal}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      )}
    </>
  )
}

export default Home
