import LogoPortafolio from '../assets/LogoPortafolio.png'
import { FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-marca">
        <img src={LogoPortafolio} alt="Logo" className="footer-logo" />
        <p>Calculadora IMC</p>
        <p className="footer-desc">Herramienta educativa para calcular el Índice de Masa Corporal en adultos y niños.</p>
      </div>

      <div className="footer-links">
        <p className="footer-titulo">Navegación</p>
        <a href="#IMC">¿Qué es IMC?</a>
        <a href="/adultos">IMC Adultos</a>
        <a href="/menores">IMC Niños</a>
        <a href="#ayuda">Ayuda</a>
      </div>

      <div className="footer-links">
        <p className="footer-titulo">Recursos</p>
        <a href="https://www.who.int/es" target="_blank" rel="noopener noreferrer">OMS</a>
        <a href="https://www.minsalud.gov.co" target="_blank" rel="noopener noreferrer">MinSalud Colombia</a>
      </div>

      <div className="footer-links">
        <p className="footer-titulo">Proyecto</p>
        <a href="https://github.com/KarlaaMS" target="_blank" rel="noopener noreferrer">
          <FaGithub size={16} /> GitHub
        </a>
        <a href="https://mi-portafolio-karlasalgado.vercel.app/" target="_blank" rel="noopener noreferrer">
          Portafolio
        </a>
      </div>

    </footer>
  )
}

export default Footer