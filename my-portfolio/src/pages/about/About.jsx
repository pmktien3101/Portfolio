import "./styles.css";

const AboutComponent = () => {
    return (
        <div className="about-container">
            <div className="left-content">
                <img src="/img-portfolio.png" alt="Me" className="about-image"/>
                <h3 className="left-name">Tina Pham</h3>   
                <div className="left-major">Software Engineer Student</div> 
                <ul className="left-social-links">
                    <li className="left-social-item">
                        <a href="https://github.com/pmktien3101" target="_blank"><img src="/GitHub.png" alt="GitHub" className="left-social-icon"/>
                        </a>
                    </li>
                     <li className="left-social-item">
                        <a href="https://github.com/pmktien3101" target="_blank"><img src="/LinkedIn.png" alt="LinkedIn" className="left-social-icon"/>
                        </a>
                    </li>
                     <li className="left-social-item">
                       <a href="https://github.com/pmktien3101" target="_blank"><img src="/Facebook.png" alt="Facebook" className="left-social-icon"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="right-content">
                <div className="about-header">
                    <ul>
                      <li className="about-bio">Bio</li>
                      <li className="about-education">Education</li>
                      <li className="about-interests">Interests</li>
                    </ul>
                </div>
                <div className="tabs-content">

                </div>
            </div>
        </div>
    )
}
export default AboutComponent