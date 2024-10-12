import Header from "./components/layout/Header"
import MainBoard from "./components/layout/MainBoard"
import Sidebar from "./components/layout/Sidebar"
import TaskModal from "./components/layout/TaskModal"

const App = () => {
  return (
    <>
      <Sidebar />

      <div className="container">
        <Header />
        <MainBoard />
      </div>

      <TaskModal />
    </>
  )
}

export default App
