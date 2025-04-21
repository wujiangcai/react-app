import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <div className="logo-container">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome to Vite + React</h1>
      <div className="card">
        <h2>Interactive Counter</h2>
        <div className="counter-display">
          <span>{count}</span>
        </div>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment Count
        </button>
        <p className="card-text">
          Try editing <code>src/App.jsx</code> to test Hot Module Replacement
        </p>
      </div>
      <p className="read-the-docs">
        Explore more about Vite and React by clicking on their logos above
      </p>
    </div>
  )
}

export default App
