import { NavLink } from "react-router-dom"
import "./styles.css"
import ROUTE from "../../../routes"
const HeaderComponent = () => {
    return (
            <div className="header-content">
                <div className="logo">
                    <h1 className="logo-text">Tina <span className="logo-name">Pham</span></h1>
                </div>
                <ul className="menu-list">
                    <li className="menu-item">
                        <NavLink to={ROUTE.HOME} className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>  </li>
                    <li className="menu-item">
                        <NavLink to={ROUTE.ABOUT} className={({isActive}) => isActive ? "active" : ""}>About</NavLink>  </li>
                    <li className="menu-item">
                        <NavLink to={ROUTE.PROJECT} className={({isActive}) => isActive ? "active" : ""}>Projects</NavLink>  </li>
                    <li className="menu-item">
                        <NavLink to={ROUTE.SKILL} className={({isActive}) => isActive ? "active" : ""}>Skills</NavLink>  </li>
                    <li className="menu-item">
                        <NavLink to={ROUTE.CONTACT} className={({isActive}) => isActive ? "active" : ""}>Contact</NavLink>  </li>
                </ul>
            </div>
    )
}
export default HeaderComponent