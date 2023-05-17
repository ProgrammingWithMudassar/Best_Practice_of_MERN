import { useState } from 'react'
import './App.css'
import { Home, Generic_Form } from './Pages/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{ width: '100%', overflow: 'hidden', textAlign: 'center' }}>
      <Router>
        <Routes>
          {/* PublicRoutes  */}
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Generic_Form' element={<Generic_Form />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
