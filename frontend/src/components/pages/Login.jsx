import { Link } from "react-router-dom"

import "../layout/AddTaskForm.css"

const Login = () => {
  return (
    <div className="container-form">
      <h2>Login</h2>

      <form method="post" autoComplete="off" className="form">
          <div className="input-container">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" placeholder="Digite seu email aqui" />
          </div>
          <div className="input-container">
              <label htmlFor="password">Senha</label>
              <input type="password" name="password" id="password" placeholder="Digite sua senha aqui" />
          </div>
          <button type="submit" className="submit-btn">Login</button>
          <span className="bottom-link">Não tem uma conta? <Link to="/register">Cadastre-se já</Link></span>
      </form>
  </div>
  )
}

export default Login
