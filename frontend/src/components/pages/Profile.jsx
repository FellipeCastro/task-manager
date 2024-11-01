import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa6"
import api from "../../constants/api"

import "./Profile.css"

const Profile = () => {
    const [user, setUser] = useState({ name: "", email: "" })
    const navigate = useNavigate()

    const fetchUserData = async () => {
        const response = await api.get("/users/profile")
        const result = await response.data

        setUser({ name: result[0].name, email: result[0].email })
    }

    const handleLogout = () => {
        localStorage.removeItem("authToken")
        navigate("/login")
    }

    useEffect(() => {
        fetchUserData() 
    }, [])

    return (
        <>
            <Link to="/home" className="back-btn">
                <FaArrowLeft />
            </Link>

            <div className="profile-container">
                <div className="title-container">
                    <h2>Perfil do Usuário</h2>

                    <button className="logout-btn" onClick={handleLogout}>
                        Sair
                    </button>
                </div>

                <div className="profile-info">
                    <strong>Nome:</strong>
                    <span>{user.name}</span>

                    <strong>Email:</strong>
                    <span>{user.email}</span>
                </div>
            </div>
        </>
    )
}

export default Profile
