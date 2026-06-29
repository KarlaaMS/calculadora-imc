import LogoCalculadora from '../assets/LogoCalculadora.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [abierto, setAbierto] = useState(false)

  return (
    <nav>
      <span>
        <img src={LogoCalculadora} id="LogoCalculadora" />
        <a href="/#home" id="titulo"><p>Calculadora IMC</p></a>
      </span>

      <ul className="nav-links">
        <li><a href="/#IMC">¿Qué es IMC?</a></li>
        <li><Link to="/adultos">IMC Adultos</Link></li>
        <li><Link to="/menores">IMC Niños</Link></li>
        <li><a href="/#ayuda">Ayuda</a></li>
      </ul>

      <button className="hamburguesa" onClick={() => setAbierto(!abierto)}>
        {abierto ? '✕' : '☰'}
      </button>

      {abierto && (
        <ul className="nav-mobile">
          <li><a href="/#IMC" onClick={() => setAbierto(false)}>¿Qué es IMC?</a></li>
          <li><Link to="/adultos" onClick={() => setAbierto(false)}>IMC Adultos</Link></li>
          <li><Link to="/menores" onClick={() => setAbierto(false)}>IMC Niños</Link></li>
          <li><a href="/#ayuda" onClick={() => setAbierto(false)}>Ayuda</a></li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar