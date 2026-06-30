import { useLocation, useNavigate } from 'react-router-dom'
import CuerpoHumano from './CuerpoHumano'

function Resultado() {
  const location = useLocation()
  const navigate = useNavigate()
  const { imc, tipo, genero, percentil } = location.state || {}

  function getCategoria(imc) {
    if (imc < 18.5) return { texto: 'Bajo peso', color: '#6E8FC9' }
    if (imc < 25) return { texto: 'Peso normal', color: '#59794f' }
    if (imc < 30) return { texto: 'Sobrepeso', color: '#C9A96E' }
    if (imc < 35) return { texto: 'Obesidad grado I', color: '#C97A6E' }
    return { texto: 'Obesidad grado II', color: '#C94E4E' }
  }

  const categoria = getCategoria(parseFloat(imc))
  

  return (
    
    <div className="resultado-container">
      <div className="resultado-info">
        <h2>Tu resultado</h2>
        <div className="imc-numero" style={{ color: categoria.color }}>
          {imc}
        </div>

        <div className="imc-categoria" style={{ borderColor: categoria.color }}>
          <p className="categoria-label">Categoría</p>
          <p className="categoria-texto" style={{ color: categoria.color }}>
            {categoria.texto}
          </p>
        </div>

        <div className="imc-escala">
          <div className="escala-item" style={{ color: '#6E8FC9' }}>
            &lt; 18.5 — Bajo peso
          </div>
          <div className="escala-item" style={{ color: '#59794f' }}>
            18.5 – 24.9 — Peso normal
          </div>
          <div className="escala-item" style={{ color: '#C9A96E' }}>
            25 – 29.9 — Sobrepeso
          </div>
          <div className="escala-item" style={{ color: '#C97A6E' }}>
            30 – 34.9 — Obesidad grado I
          </div>
          <div className="escala-item" style={{ color: '#C94E4E' }}>
            ≥ 35 — Obesidad grado II
          </div>
        </div>

        <button
          className="boton-volver"
          onClick={() => navigate(tipo === 'adulto' ? '/adultos' : '/menores')}
        >
          Calcular de nuevo
        </button>
      </div>

      <div className="resultado-svg">
        <CuerpoHumano imc={parseFloat(imc)} genero={genero} tipo={tipo} percentil={percentil} />
      </div>
    </div>
  )
}

export default Resultado