import { Outlet } from "react-router-dom"
import HeaderComponent from "./components/Header/Header"
import CustomCursor from "../components/CustomCursor"
import "./styles.css"
const MainLayout = () => {
    return(
        <>
        <CustomCursor />
        <div className="main-layout">
            <div className="header-container"></div>
                <HeaderComponent/>
            <div className="content-container">
                <Outlet/>
            </div>
        </div>
        </>
    )
}
export default MainLayout