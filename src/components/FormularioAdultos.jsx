import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function FormularioAdultos() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [genero, setGenero] = useState('')
  const navigate = useNavigate()

  function calcularIMC() {
    if (!peso || !altura || !genero) {
      alert('Por favor completa todos los campos')
      return
    }

    const alturaMetros = altura / 100
    const imc = peso / (alturaMetros * alturaMetros)

    navigate('/resultado', {
      state: {
        imc: imc.toFixed(2),
        tipo: 'adulto',
        genero
      }
    })
  }

  return (
    <div className="formulario-container">
      <h2>IMC para <span>Adultos</span></h2>
      <p>Este formulario es válido para personas de 18 años en adelante</p>

      <div className="formulario">
        <div className="campo">
          <label>Género</label>
          <select value={genero} onChange={(e) => setGenero(e.target.value)}>
            <option value="">Selecciona</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
        </div>

        <div className="campo">
          <label>Peso (kg)</label>
          <input
            type="number"
            placeholder="Ej: 65"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>

        <div className="campo">
          <label>Altura (cm)</label>
          <input
            type="number"
            placeholder="Ej: 165"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>

        <button className="boton-calcular" onClick={calcularIMC}>
          Calcular IMC
        </button>
      </div>
    </div>
  )
}

export default FormularioAdultos