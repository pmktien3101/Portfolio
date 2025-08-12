import AvatarDisplay from "../../components/Avatar/Avatar"
import Button from "../../components/Button/Button"
import "./styles.css"
import ROUTE from "../../routes"
import {ReactTyped} from "react-typed"

const HomeComponent = () => {
    return (
        <div className="home-container">
                <div className="content-left">
                    <AvatarDisplay/>
                </div>
                <div className="content-right">
                    <div className="header-content-right">
                        <h1 className="header-content-title">Hello, I'm <span>Tina</span></h1>
                    </div>
                    <div className="content-job">
                        I'm a {""}
                        <span className="typing">
                            <ReactTyped
                                strings={["Front-end Developer",
                                "Back-end Developer",
                                "Business Analyst"]}
                                typeSpeed={200}
                                backSpeed={100}
                                backDelay={2000}
                                showCursor={true}
                                cursorChar="|"
                                loop={true}
                            />
                        </span>
                    </div>
                    <div className="description-content">
                        <p>I craft beautiful, responsive web applications with modern technologies.
                            Passionate about clean code, user experience, and innovative design.</p>
                    </div>
                    <div className="button-container">
                        <Button text="Hire Me" onClick={() => alert('Hire me clicked')} variant="solid" style={{marginRight:'18px' }}/>
                        <Button text="Contact Me" onClick={() => window.location.href = ROUTE.CONTACT } variant="outline"/>
                    </div>
                </div>
        </div>
    )
}
export default HomeComponent