import LogoCalculadora from '../assets/LogoCalculadora.svg'
import { useState } from 'react'

function Navbar (){
    
    const [abierto, setAbierto] = useState(false)
    return (
    <nav>
        <span><img src={LogoCalculadora} id="LogoCalculadora"></img>
        <p><a href="/#">Calculadora IMC</a></p></span>
        <ul className="nav-links">
        <li><a href="/que-es-imc" onClick={() => setAbierto(false)}>¿Qué es IMC?</a></li>
        <li><a href="/adultos" onClick={() => setAbierto(false)}>IMC Adultos</a></li>
        <li><a href="/menores" onClick={() => setAbierto(false)}>IMC Niños</a></li>
        <li><a href="/ayuda" onClick={() => setAbierto(false)}>Ayuda</a></li>
      </ul>

      {/* Botón hamburguesa */}
      <button
        className="hamburguesa"
        onClick={() => setAbierto(!abierto)}
      >
        {abierto ? '✕' : '☰'}
      </button>

      {/* Menú móvil */}
      {abierto && (
        <ul className="nav-mobile">
          <li><a href="/que-es-imc" onClick={() => setAbierto(false)}>¿Qué es IMC?</a></li>
          <li><a href="/adultos" onClick={() => setAbierto(false)}>IMC Adultos</a></li>
          <li><a href="/menores" onClick={() => setAbierto(false)}>IMC Menores</a></li>
          <li><a href="#ayuda" onClick={() => setAbierto(false)}>Ayuda</a></li>
        </ul>
      )}
    </nav>
    )
}

export default Navbar