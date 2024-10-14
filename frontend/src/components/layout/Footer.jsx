import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <h1>TaskManager</h1>

        <ul>
            <li><FaFacebook /> - TaskManager Oficial</li>
            <li><FaInstagram /> - taskmanager_oficial</li>
            <li><FaWhatsapp /> - (11) 00000-0000</li>
        </ul>
    </footer>
  )
}

export default Footer