import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home.jsx'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App