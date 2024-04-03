import { Route, Routes } from "react-router-dom"
import './style.css'
import HeaderComponent from "../components/header/HeaderComponent"
import HomeComponent from "../components/home/HomeComponent"
import FrankComponent from "../components/devsComponents/FrankComponent"
import KevinComponent from "../components/devsComponents/KevinComponent"
import JesusComponent from "../components/devsComponents/JesusComponent"
const HomePage = () => {
    return (
        <>
            <HeaderComponent />
            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/frank" element={<FrankComponent />} />
                <Route path="/kevin" element={<KevinComponent />} />
                <Route path="/jesus" element={<JesusComponent />} />
            </Routes>
            <footer className="footer">
                &copy; todos los derechos de reservados
            </footer>
        </>
    )
}

export default HomePage
