import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Layout } from "./components/layout/Layout"
import { Home } from "./pages/Home"
import { CreateBudget } from "./pages/CreateBudget"
import { Budget } from "./pages/Budget"
import { CreateTransaction } from "./pages/CreateTransaction"

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/create" element={<CreateTransaction />} />
          <Route path="/createBudget" element={<CreateBudget />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
