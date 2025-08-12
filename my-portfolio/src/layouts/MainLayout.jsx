import { Outlet } from "react-router-dom"
import HeaderComponent from "./components/Header/Header"
import "./styles.css"
const MainLayout = () => {
    return(
        <div className="main-layout">
            <div className="header-container"></div>
                <HeaderComponent/>
            <div className="content-container">
                <Outlet/>
            </div>
        </div>
    )
}
export default MainLayout