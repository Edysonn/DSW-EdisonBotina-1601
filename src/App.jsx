import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Fase 5 Grupo 16 UNAD Diseño de Sitios Web</h1>
      <div className="card">
        <h3> Integrantes</h3>
        <h4> Edison Arquimedes Botina Jojoa</h4>
        <h4>Luis Alejandro Bacca Rodríguez</h4>
        <h4>John Alexander Arturo Quintero</h4>
        <h4>José Yohón Jairo Leon Mavisoy</h4>
        <h4>Joseph David Coral Solarte</h4>
        <h4>Grupo 16</h4>
      </div>
      <div>
    
      <p>
        <a href='inicio.html'><h5>Clic aquí para ir al proyecto</h5></a>
      </p>
      </div>
      
    </>
  )
}

export default App
