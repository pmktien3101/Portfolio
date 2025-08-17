import { Outlet } from "react-router-dom"
import HeaderComponent from "./components/Header/Header"
import "./styles.css"
import AnimatedCursor from "react-animated-cursor"
const MainLayout = () => {
    return(
        <>
        <AnimatedCursor
            innerSize={8}
            outerSize={30}
            outerAlpha={0.4}
            innerScale={0.7}
            outerScale={2}
            color="0, 255, 180" />
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