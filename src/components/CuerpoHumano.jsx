import mujerBajoPeso from '../assets/mujer-bajo-peso.png'
import mujerNormal from '../assets/mujer-normal.png'
import mujerSobrepeso from '../assets/mujer-sobrepeso.png'
import mujerObesidad1 from '../assets/mujer-obesidad-1.png'
import mujerObesidad2 from '../assets/mujer-obesidad-2.png'

import hombreBajoPeso from '../assets/hombre-bajo-peso.png'
import hombreNormal from '../assets/hombre-normal.png'
import hombreSobrepeso from '../assets/hombre-sobrepeso.png'
import hombreObesidad1 from '../assets/hombre-obesidad-1.png'
import hombreObesidad2 from '../assets/hombre-obesidad-2.png'

import ninaBajoPeso from '../assets/NinaBajoPeso.png'
import ninaNormal from '../assets/NinaNormal.png'
import ninaSobrepeso from '../assets/NinaSobrepeso.png'
import ninaObesidad1 from '../assets/NinaObesidad1.png'

import ninoBajoPeso from '../assets/NinoBajoPeso.png'
import ninoNormal from '../assets/NinoNormal.png'
import ninoSobrepeso from '../assets/NinoSobrepeso.png'
import ninoObesidad1 from '../assets/NinoObesidad1.png'

function CuerpoHumano({ imc, genero, tipo, percentil }) {
  
  function getImagen(imc, genero, tipo, percentil) {

    if (tipo === "menor"){
      const esNina = genero === 'femenino'

      if (percentil === '< 5')   return esNina ? ninaBajoPeso : ninoBajoPeso
      if (percentil === '5-84')  return esNina ? ninaNormal : ninoNormal
      if (percentil === '85-94') return esNina ? ninaSobrepeso : ninoSobrepeso
      if (percentil === '≥ 95')  return esNina ? ninaObesidad1 : ninoObesidad1
      return null

    }

    if (tipo === "adulto"){
    const esMujer = genero === 'femenino'

    if (imc < 18.5) return esMujer ? mujerBajoPeso : hombreBajoPeso
    if (imc < 25)   return esMujer ? mujerNormal : hombreNormal
    if (imc < 30)   return esMujer ? mujerSobrepeso : hombreSobrepeso
    if (imc < 35)   return esMujer ? mujerObesidad1 : hombreObesidad1
    return           esMujer ? mujerObesidad2 : hombreObesidad2
  }
}

  const imagen = getImagen(imc, genero, tipo, percentil)

  return (
    <div className="cuerpo-container">
      <img
        src={imagen}
        alt={`Figura corporal - ${genero} - ${tipo}`}
        className="cuerpo-imagen"
      />
    </div>
  )
}

export default CuerpoHumano