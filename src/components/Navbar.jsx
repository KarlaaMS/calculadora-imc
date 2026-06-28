import LogoCalculadora from '../assets/LogoCalculadora.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [abierto, setAbierto] = useState(false)

  return (
    <nav>
      <span>
        <img src={LogoCalculadora} id="LogoCalculadora" />
        <Link to="/" id="titulo"><p>Calculadora IMC</p></Link>
      </span>

      <ul className="nav-links">
        <li><Link to="/que-es-imc">¿Qué es IMC?</Link></li>
        <li><Link to="/adultos">IMC Adultos</Link></li>
        <li><Link to="/menores">IMC Niños</Link></li>
        <li><Link to="/ayuda">Ayuda</Link></li>
      </ul>

      <button className="hamburguesa" onClick={() => setAbierto(!abierto)}>
        {abierto ? '✕' : '☰'}
      </button>

      {abierto && (
        <ul className="nav-mobile">
          <li><Link to="/que-es-imc" onClick={() => setAbierto(false)}>¿Qué es IMC?</Link></li>
          <li><Link to="/adultos" onClick={() => setAbierto(false)}>IMC Adultos</Link></li>
          <li><Link to="/menores" onClick={() => setAbierto(false)}>IMC Niños</Link></li>
          <li><Link to="/ayuda" onClick={() => setAbierto(false)}>Ayuda</Link></li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar