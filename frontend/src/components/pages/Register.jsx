import { Link } from "react-router-dom"

import "../layout/AddTaskForm.css"

const Register = () => {
  return (
    <div className="container-form">
        <h2>Novo usuário</h2>

        <form method="post" autoComplete="off" className="form">
            <div className="input-container">
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" id="name" placeholder="Digite seu nome aqui" />
            </div>
            <div className="input-container">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" placeholder="Digite seu email aqui" />
            </div>
            <div className="input-container">
                <label htmlFor="password">Senha</label>
                <input type="password" name="password" id="password" placeholder="Digite sua senha aqui" />
            </div>
            <div className="input-container">
                <label htmlFor="confirm-password">Confirmar senha</label>
                <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirme sua senha aqui" />
            </div>
            <button type="submit" className="submit-btn">Cadastrar</button>
            <span className="bottom-link">Já tem uma conta? <Link to="/login">Faça seu login já</Link></span>
        </form>
    </div>
  )
}

export default Register
