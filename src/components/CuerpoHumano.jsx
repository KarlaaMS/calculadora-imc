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

function CuerpoHumano({ imc, genero }) {

  function getImagen(imc, genero) {
    const esMujer = genero === 'femenino'

    if (imc < 18.5) return esMujer ? mujerBajoPeso : hombreBajoPeso
    if (imc < 25)   return esMujer ? mujerNormal : hombreNormal
    if (imc < 30)   return esMujer ? mujerSobrepeso : hombreSobrepeso
    if (imc < 35)   return esMujer ? mujerObesidad1 : hombreObesidad1
    return           esMujer ? mujerObesidad2 : hombreObesidad2
  }

  const imagen = getImagen(imc, genero)

  return (
    <div className="cuerpo-container">
      <img
        src={imagen}
        alt={`Figura corporal - ${genero}`}
        className="cuerpo-imagen"
      />
    </div>
  )
}

export default CuerpoHumano