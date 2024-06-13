import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from "./components/layout/Layout"
import { Home } from "./pages/Home"
import { CreateTransaction } from './pages/CreateTransaction'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/create" element={<CreateTransaction />}/>
        </Route>
      </Routes>
    </Router>
  )

}

export default App




// Form Submission Popup

// Form error 

// Update data after DELETE
