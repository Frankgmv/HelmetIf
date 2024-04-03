import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<h2>404 - Ruta No Econtrada</h2>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
