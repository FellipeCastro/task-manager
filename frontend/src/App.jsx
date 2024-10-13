import Header from "./components/layout/Header"
import MainBoard from "./components/layout/MainBoard"
import Sidebar from "./components/layout/Sidebar"
// import TaskModal from "./components/layout/TaskModal"
// import AddTaskForm from "./components/layout/AddTaskForm"
// import AddBoardForm from "./components/layout/AddBoardForm"

const App = () => {
  return (
    <>
      <Sidebar />

      <div className="container">
        <Header />
        <MainBoard />
      </div>
    </>
  )
}

export default App
