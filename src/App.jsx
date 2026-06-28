import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import FormularioAdultos from './components/FormularioAdultos'
import Resultado from './components/Resultado'
import FormularioMenores from './components/FormularioMenores'
import './index.css'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adultos" element={<FormularioAdultos/>}/>
        <Route path="/resultado" element={<Resultado/>}/>
        <Route path="/menores" element={<FormularioMenores/>}/>
      </Routes>
    </div>
  )
}

export default App