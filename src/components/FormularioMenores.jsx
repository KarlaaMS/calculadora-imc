import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { calcularPercentilAproximado } from './data/percentiles'

function FormularioMenores() {
  const [edad, setEdad] = useState('')
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [genero, setGenero] = useState('')
  const navigate = useNavigate()

  function calcularIMC() {
    if (!edad || !peso || !altura || !genero) {
      alert('Por favor completa todos los campos')
      return
    }

    if (edad < 2 || edad > 17) {
      alert('Esta calculadora es válida para niños de 2 a 17 años')
      return
    }

    const alturaMetros = altura / 100
    const imc = peso / (alturaMetros * alturaMetros)
    const { percentil, categoria } = calcularPercentilAproximado(
      parseFloat(imc.toFixed(2)),
      parseInt(edad),
      genero
    )

    navigate('/resultado', {
      state: {
        imc: imc.toFixed(2),
        tipo: 'menor',
        genero,
        edad,
        percentil,
        categoria
      }
    })
  }

  return (
    <div className="formulario-container">
      <h2>IMC para <span>Niños</span></h2>
      <p>Válido para niños y adolescentes de 2 a 17 años</p>

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
          <label>Edad (años)</label>
          <input
            type="number"
            placeholder="Ej: 10"
            min="2"
            max="17"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>

        <div className="campo">
          <label>Peso (kg)</label>
          <input
            type="number"
            placeholder="Ej: 35"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>

        <div className="campo">
          <label>Altura (cm)</label>
          <input
            type="number"
            placeholder="Ej: 140"
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

export default FormularioMenores