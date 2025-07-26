import { Route, Routes } from "react-router-dom"
import HomeComponent from "./pages/home/Home"
import ROUTE from "./routes"
import AboutComponent from "./pages/about/About"
import SkillComponent from "./pages/skill/Skill"
import ProjectComponent from "./pages/project/Project"
import ContactComponent from "./pages/contact/Contact"

function App() {
  return (
    <Routes>
    <Route path={ROUTE.HOME} element={<HomeComponent/>}/>
    <Route path={ROUTE.ABOUT} element={<AboutComponent/>}/>
    <Route path={ROUTE.SKILL} element={<SkillComponent/>}/>
    <Route path={ROUTE.PROJECT} element={<ProjectComponent/>}/>
    <Route path={ROUTE.CONTACT} element={<ContactComponent/>}/>
  </Routes>
  )
}

export default App
