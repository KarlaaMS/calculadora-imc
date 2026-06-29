import 'katex/dist/katex.min.css';
import { useEffect, useRef } from 'react'
import katex from 'katex'
import {TiWarning} from 'react-icons/ti'
import TablaIMC from '../assets/TablaIMC.png'
import TablaNinos from '../assets/TablaNinos.png'

function imc (){
    const formulaRef = useRef(null)
    const formulaInglesRef = useRef(null)

    useEffect(() => {
    if (formulaRef.current) {
        katex.render(
        "\\text{IMC} = \\frac{\\text{Peso (kg)}}{\\text{Estatura (m)}^{2}}",
        formulaRef.current,
        { displayMode: true }
        )
    }
    if (formulaInglesRef.current) {
        katex.render(
        "\\text{IMC} = \\frac{\\text{Peso (lb)}}{\\text{Estatura (in)}^{2}} \\times 703",
        formulaInglesRef.current,
        { displayMode: true }
        )
    }
    }, [])

   return (
  <section id="IMC">
    <h2 className='que-titulo'>¿Qué es IMC?</h2>

    {/* BLOQUE 1 - Qué es + imagen adultos */}
    <div className='bloque'>
      <div className='contenido-texto'>
        <p>
          El <span>Índice de Masa Corporal (IMC)</span> es un indicador clave en el ámbito de la salud preventiva.
          Una medida ampliamente utilizada para evaluar la adecuación del peso corporal de una persona en relación con su altura.
          Es la representación de una fórmula sencilla, dada por el peso en <span>Kilogramos (kg)</span>, dividido por el cuadrado de su <span>Altura (m)</span>.
        </p>
        <p>
          El resultado del IMC se interpreta según los rangos establecidos por la <span>Organización Mundial de la Salud (OMS)</span>, estos son:
        </p>
        <ul className='lista-bonita'>
          <li>Bajo peso</li>
          <li>Normal</li>
          <li>Sobrepeso</li>
          <li>Obesidad 1</li>
          <li>Obesidad 2</li>
          <li>Obesidad 3</li>
        </ul>
      </div>
      <div className='contenido-imagen'>
        <img className='imagen-tabla' src={TablaIMC} alt="Tabla IMC adultos OMS" />
      </div>
    </div>

    {/* BLOQUE 2 - Fórmulas */}
    <div className='bloque-completo'>
      <h3 className='sub-titulo'>Fórmulas para calcular el IMC</h3>
      <p>Existen dos sistemas de medida para calcular el IMC:</p>
      <div className='formulas-grid'>
        <div className='formula-card'>
          <h4>Sistema métrico</h4>
          <p>Utiliza <span>kilogramos (kg)</span> y <span>metros (m)</span>.</p>
          <div ref={formulaRef}></div>
          <p className='nota'><span style={{color: "#4F6F52"}}>Nota:</span> Este es el sistema que utiliza nuestra calculadora.</p>
        </div>
        <div className='formula-card'>
          <h4>Sistema inglés</h4>
          <p>Utiliza <span>libras (lb)</span> y <span>pulgadas (in)</span>.</p>
          <div ref={formulaInglesRef}></div>
          <p>
            El factor <span>703</span> es un factor de conversión que ajusta las unidades inglesas
            para que el resultado sea equivalente al sistema métrico.
            Se obtiene dividiendo <span>1 kg/m²</span> entre <span>1 lb/in²</span>, lo que da aproximadamente 703.
          </p>
          <p className='nota'><TiWarning size={20} color={"#de1c0e"}/> Nuestra calculadora solo opera en sistema métrico (kg y cm) por el momento.</p>
        </div>
      </div>
    </div>

    {/* BLOQUE 3 - IMC en niños + imagen niños */}
    <div className='bloque'>
      <div className='contenido-texto'>
        <h3 className='sub-titulo'>IMC en niños y adolescentes</h3>
        <p>
          El IMC en niños y adolescentes <span>no se interpreta igual que en adultos</span>.
          Un mismo valor de IMC puede ser normal para un niño de 8 años pero indicar sobrepeso en uno de 15.
          Esto ocurre porque el cuerpo cambia significativamente durante el crecimiento.
        </p>
        <h4 className='sub-titulo-2'>¿Qué son los percentiles?</h4>
        <p>
          Un <span>percentil</span> indica la posición del niño respecto a otros niños de su misma
          <span> edad y género</span>. Por ejemplo, un percentil 75 significa que el niño tiene
          un IMC mayor que el 75% de los niños de su edad y género.
          Los percentiles se basan en las tablas de referencia de la <span>OMS</span>.
        </p>
        <ul className='lista-bonita'>
          <li>Percentil menor a 5 — Bajo peso</li>
          <li>Percentil 5 a 84 — Peso saludable</li>
          <li>Percentil 85 a 94 — Sobrepeso</li>
          <li>Percentil mayor o igual a 95 — Obesidad</li>
        </ul>
        <h4 className='sub-titulo-2'>¿Por qué es diferente en niños?</h4>
        <p>
          Durante el crecimiento, la cantidad de grasa corporal cambia naturalmente con la edad.
          Los bebés tienen más grasa, que disminuye en la niñez temprana y vuelve a aumentar
          en la adolescencia. Por esto, el IMC en niños siempre se evalúa comparándolo con
          otros niños de la <span>misma edad y género</span>, no con valores fijos como en adultos.
        </p>
      </div>
      <div className='contenido-imagen'>
        <img className='imagen-tabla' src={TablaNinos} alt="Tabla IMC niños OMS" />
      </div>
    </div>

    {/* BLOQUE 4 - Limitaciones */}
    <div className='bloque-completo'>
      <h3 className='sub-titulo'>Limitaciones del IMC</h3>
      <p>El IMC es un indicador útil pero tiene limitaciones importantes:</p>
      <ul className='lista-bonita'>
        <li>No distingue entre masa muscular y grasa corporal</li>
        <li>No considera la distribución de la grasa en el cuerpo</li>
        <li>No aplica igual para todos los grupos étnicos</li>
        <li>No es válido para mujeres embarazadas</li>
        <li>Es solo un indicador, no un diagnóstico médico</li>
      </ul>
      <p className='nota-final'>
        <TiWarning size={20} color={"#de1c0e"}/>   El IMC es una herramienta de referencia. Siempre consulta a un profesional de la salud para una evaluación completa.
      </p>
    </div>

  </section>
)
}

export default imc