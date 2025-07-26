import AvatarDisplay from "../../components/Avatar/Avatar"
import Button from "../../components/Button/Button"
import HeaderComponent from "../../components/Header/Header"
import Modal from "../../components/Modal/Modal"
import "./styles.css"

const HomeComponent = () => {
    return (
        <div className="home-container">
            <div className="header-container">
                <HeaderComponent/>
            </div>
            <div className="content-container">
                <div className="content-left">
                    <AvatarDisplay/>
                </div>
                <div className="content-right">
                    <div className="header-content-right">
                        <h1 className="header-content-title">Hello, I'm <span>Tina</span></h1>
                    </div>
                    <div className="content-job">
                        I'm a <span>Front-end Developer</span>
                    </div>
                    <div className="description-content">
                        <p>I craft beautiful, responsive web applications with modern technologies.
                            Passionate about clean code, user experience, and innovative design.</p>
                    </div>
                    <div className="button-container">
                        <Button text="Hire Me" onClick={() => alert('Hire me clicked')} variant="solid" style={{marginRight:'18px' }}/>
                        <Button text="Contact Me" onClick={() => alert('Contact me clicked')} variant="outline"/>
                    </div>
                </div>
            </div>
            <div className="find-container">
                    <Modal className="find-wrapper">
                        <h2 className="find-title">Find me in</h2>
                        <div className="icon-link">
                            <img src="/LinkedIn.png"/>
                            <img src="/GitHub.png"/>
                            <img src="/Facebook.png"/>
                        </div>
                    </Modal>
            </div>
        </div>
    )
}
export default HomeComponent