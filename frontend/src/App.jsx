import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

// Componentes
import Home from "./components/pages/Home"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"

const App = () => {
  const [idUser, setIdUser] = useState(1)

  return (
    <>
      {idUser ? (
        <Home />
      ) : (
        <Router>
          <Routes>
            <Route exact path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      )}
    </>
  )
}

export default App
