import { useNavigate } from 'react-router-dom'
import CuerpoHumano from '../assets/SinFondoImagenCuerpo.png'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home">
      <div className="home-contenido">
        <h1 className="home-titulo">Calculadora <span>IMC</span></h1>
        <p className="home-subtitulo">Conoce tu índice de masa corporal y lo que significa para tu salud</p>
        <div className="home-botones">
          <button className="boton-adulto" onClick={() => navigate('/adultos')}>
            Soy adulto
          </button>
          <button className="boton-menor" onClick={() => navigate('/menores')}>
            Soy menor de edad
          </button>
        </div>
      </div>
      <div className="home-imagen">
        <img src={CuerpoHumano} alt="Cuerpo humano" />
      </div>
    </div>
  )
}

export default Home