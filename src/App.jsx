import { HashRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import "toastr/build/toastr.css";
function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
