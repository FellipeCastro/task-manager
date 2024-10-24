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

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const token = localStorage.getItem("authToken")
        if (!token) {
          throw new Error("Usuário não autenticado")
        }

        const res = await api.get("/boards/overview", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        const result = res.data
        setBoards(result)

        if (result.length > 0) {
          setActiveBoardId(result[0].id)
        }
      } catch (error) {
        console.error("Erro ao buscar os painéis: ", error)
      }
    }

    fetchBoards()
  }, [])

  const deleteBoard = async (id) => {
    try {
      const token = localStorage.getItem("authToken")
      if (!token) {
        throw new Error("Usuário não autenticado")
      }

      // Deletando o board no servidor
      await api.delete(`/boards/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      // Atualizando o estado no front-end
      const updatedBoards = boards.filter(board => board.id !== id)
      setBoards(updatedBoards)

      // Se o board deletado era o board ativo, redefinimos o activeBoardId
      if (activeBoardId === id) {
        setActiveBoardId(updatedBoards.length > 0 ? updatedBoards[0].id : null)
      }
    } catch (error) {
      console.error("Erro ao deletar o painel: ", error)
    }
  }


  const addBoard = async (newBoardTitle) => {
    try {
      const token = localStorage.getItem("authToken")
      if (!token) {
        throw new Error("Usuário não autenticado")
      }

      // Fazendo a requisição POST para criar o novo board
      const res = await api.post(
        "/boards",
        { 
          title: newBoardTitle 
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      // Obtendo o ID do novo board a partir da resposta
      const newBoardId = res.data.id

      // Criando manualmente o objeto do novo board no front-end
      const newBoard = {
        id: newBoardId,
        title: newBoardTitle,
        tasks: [] // Inicialmente, o board não tem tarefas
      }

      // Atualizando o estado com o novo board
      setBoards([...boards, newBoard])

      // Definir o novo board como ativo
      setActiveBoardId(newBoardId)

      // Fechando o modal de adição de board
      setShowAddBoardForm(false)

    } catch (error) {
      console.error("Erro ao adicionar o novo painel: ", error)
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
