import Header from "./components/layout/Header"
import MainBoard from "./components/layout/MainBoard"
import Sidebar from "./components/layout/Sidebar"

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
