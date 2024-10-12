import Header from "./components/layout/Header"
import Sidebar from "./components/layout/Sidebar"

const App = () => {
  return (
    <>
      <Sidebar />

      <div className="container">
        <Header />
      </div>
    </>
  )
}

export default App
