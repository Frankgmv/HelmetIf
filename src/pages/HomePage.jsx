import { Route, Routes } from "react-router-dom"
import './style.css'
import HeaderComponent from "../components/header/HeaderComponent"
import HomeComponent from "../components/home/HomeComponent"
import FrankComponent from "../components/devsComponents/FrankComponent"
import KevinComponent from "../components/devsComponents/KevinComponent"
const HomePage = () => {
    return (
        <div className="contaniner-general">
            <HeaderComponent />
            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/frank" element={<FrankComponent />} />
                <Route path="/kevin" element={<KevinComponent />} />
            </Routes>
            <footer className="footer">
                &copy; todos los derechos de reservados
            </footer>
        </div>
    )
}

export default HomePage
