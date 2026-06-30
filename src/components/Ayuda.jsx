import { MdLocalHospital} from 'react-icons/md'
import { HiCheckBadge } from "react-icons/hi2";
import { TiWarning} from 'react-icons/ti'
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import { useState } from 'react'

function Ayuda() {

    const [abierto, setAbierto] = useState(null); 

    const preguntas = [
        {
            id: 1, 
            pregunta: "¿Qué unidades debo usar?",
            respuesta: "Nuestra calculadora trabaja en sistema métrico - el peso en Kilogramos (kg) y la estatura en metros (m), en nuestra calculadora se utiliza la estutatura en centimentros (cm). Por ejemplo: 65kg y 165 cm."
        }, 
        {
            id: 2, 
            pregunta: "¿Por qué necesito ingresar el género?", 
            respuesta: "En adultos, el género ayuda a mostrar la figura corporal correspondiente. En niños es fundamental por que los percentiles de la OMS son diferentes para niños y niñas."
        }, 
        {
            id: 3, 
            pregunta: "¿El resultado es un diagnostico médico?", 
            respuesta: "No, el IMC es un indicador de referencia, no un diagnóstico. Solo un profesional de la salud puede evaluar tu estado nutricional de forma completa."
        }, 
        {
            id: 4, 
            pregunta: "¿Qué hago si mi IMC está fuera del rango normal?", 
            respuesta: "Consulta a tu médico o nutricionista. El IMC es un punto de partida, no una sentencia. Factores como la masa muscular, la edad y el grupo étnico también influyen."
        }, 
        {
            id: 5, 
            pregunta: "¿Por qué el IMC de niños usa percentiles?", 
            respuesta: "Por que el cuerpo de un niño cambia constantemente. Un mismo IMC puede ser normal a los 8 años pero indicar sobrepeso a los 14. Los percentiles comparan al niño con otros niños de su misma edad y género."
        }
    ]
  return (
    <section id="ayuda">
      <h2 className='que-titulo'>Ayuda</h2>

      {/* BLOQUE 1 - Cómo usar */}
      <div className='bloque-completo'>
        <h3 className='sub-titulo'>¿Cómo usar la calculadora?</h3>
        <div className='pasos-grid'>
          <div className='paso-card'>
            <span className='paso-numero'>01</span>
            <h4>Selecciona tu grupo</h4>
            <p>Elige entre <span>Soy adulto</span> (18 años o más) o <span>Soy menor de edad</span> (2 a 17 años).</p>
          </div>
          <div className='paso-card'>
            <span className='paso-numero'>02</span>
            <h4>Ingresa tus datos</h4>
            <p>Completa el formulario con tu <span>género</span>, <span>peso en kg</span> y <span>estatura en cm</span>. Si eres menor, también tu edad.</p>
          </div>
          <div className='paso-card'>
            <span className='paso-numero'>03</span>
            <h4>Calcula</h4>
            <p>Haz clic en <span>Calcular IMC</span> y obtendrás tu resultado con su categoría.</p>
          </div>
          <div className='paso-card'>
            <span className='paso-numero'>04</span>
            <h4>Interpreta el resultado</h4>
            <p>Lee tu categoría y consulta la figura corporal. Recuerda que es solo un indicador de referencia.</p>
          </div>
        </div>
      </div>

      {/* BLOQUE 2 - Cómo medir */}
      <div className='bloque-completo'>
        <h3 className='sub-titulo'>¿Cómo medir correctamente?</h3>
        <div className='formulas-grid'>
          <div className='formula-card'>
            <h4><HiCheckBadge color='var(--accent)' size={18} /> Peso</h4>
            <ul className='lista-ayuda'>
              <li>Pésate en ayunas, preferiblemente en la mañana</li>
              <li>Sin zapatos ni ropa pesada</li>
              <li>Usa siempre la misma báscula para consistencia</li>
              <li>Párate en el centro de la báscula sin apoyarte en nada</li>
            </ul>
          </div>
          <div className='formula-card'>
            <h4><HiCheckBadge color='var(--accent)' size={18} /> Estatura</h4>
            <ul className='lista-ayuda'>
              <li>Párate descalzo contra una pared recta</li>
              <li>Mantén la cabeza recta mirando al frente</li>
              <li>Pies juntos y talones pegados a la pared</li>
              <li>Pide ayuda a alguien para marcar la medida con precisión</li>
            </ul>
          </div>
        </div>
      </div>

      {/* BLOQUE 3 - Preguntas frecuentes */}
      <div className='bloque-completo'>
        <h3 className='sub-titulo'>Preguntas frecuentes</h3>
        <div className='faq-lista'>
            {preguntas.map((item) => (
                <div className="faq-item" key={item.id}>
                    <button className='faq-pregunta'
                    onClick={() => setAbierto(abierto === item.id ? null : item.id)}>
                        <span>{item.pregunta}</span>
                        <span>{abierto === item.id ? <FaChevronUp/> : <FaChevronDown/>}</span>
                    </button>
                    {abierto === item.id && (
                        <p className="faq-respuesta">{item.respuesta}</p>
                    ) }
                </div>
            ))}
        </div>
      </div>

      {/* BLOQUE 4 - Recursos */}
      <div className='bloque-completo'>
        <h3 className='sub-titulo'>Recursos y fuentes</h3>
        <div className='recursos-grid'>
          <a className='recurso-card' href="https://www.who.int/es/news-room/fact-sheets/detail/obesity-and-overweight" target="_blank" rel="noopener noreferrer">
            <MdLocalHospital size={28} color='var(--accent)' />
            <div>
              <h4>Organización Mundial de la Salud</h4>
              <p>Información oficial sobre obesidad y sobrepeso</p>
            </div>
          </a>
          <a className='recurso-card' href="https://www.minsalud.gov.co" target="_blank" rel="noopener noreferrer">
            <MdLocalHospital size={28} color='var(--accent)' />
            <div>
              <h4>Ministerio de Salud de Colombia</h4>
              <p>Guías y recomendaciones nutricionales para colombianos</p>
            </div>
          </a>
        </div>

        <p className='nota-final'>
          <TiWarning size={18} color='#de1c0e' /> Esta calculadora es una herramienta educativa. Ante cualquier duda sobre tu salud, consulta siempre a un profesional médico.
        </p>
      </div>

    </section>
  )
}

export default Ayuda
