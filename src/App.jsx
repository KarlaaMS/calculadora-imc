import { Routes, Route } from 'react-router-dom'
/*import katex from 'katex'
import 'katex/dist/katex.min.css';*/
import Navbar from './components/Navbar'
import Home from './components/Home'
import FormularioAdultos from './components/FormularioAdultos'
import Resultado from './components/Resultado'
import FormularioMenores from './components/FormularioMenores'
import IMC from './components/QueEsImc'
import Ayuda from './components/ayuda'
import Footer from './components/Footer'

import './index.css'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home/>
            <IMC/>
            <Ayuda/>
            <Footer/>
          </>
        }/>
        <Route path="/adultos" element={<FormularioAdultos/>}/>
        <Route path="/resultado" element={<Resultado/>}/>
        <Route path="/menores" element={<FormularioMenores/>}/>
      </Routes>
    </div>
  )
}

export default App