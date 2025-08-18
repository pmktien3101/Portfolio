import { useState } from "react";
import "./styles.css";
import { FaBullseye, FaCheckDouble, FaGraduationCap, FaHeart, FaQuoteLeft, FaRocket, FaUber, FaUser } from "react-icons/fa";

const AboutComponent = () => {
    const [activeTab, setActiveTab] = useState("bio");
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
                    <ul className="about-tabs">
                      <li className={`tab-item ${activeTab === "bio" ? "active" : "" }`}
                       onClick={() => setActiveTab("bio")}
                      ><FaUser/> Bio</li>
                      <li className={`tab-item ${activeTab === "education" ? "active" : "" }`}
                       onClick={() => setActiveTab("education")}
                      ><FaGraduationCap/> Education</li>
                      <li className={`tab-item ${activeTab === "interests" ? "active" : "" }`}
                       onClick={() => setActiveTab("interests")}
                      ><FaHeart/> Interests</li>
                      <div className="tab-indicator" data-active={activeTab}></div>
                    </ul>
                </div>
                <div className="tabs-content">
                    {activeTab === "bio" && (
                        <div className="tab-bio">
                            <h2 className="bio-title">Personal Bio</h2>
                            <div className="bio-card bio-about">
                              <h3> <FaQuoteLeft className="bio-icon"/> About Me</h3>
                              <p>
                                I am a passionate software engineering student with a strong interest in web development and artificial intelligence. I enjoy solving complex problems and continuously learning new technologies.
                              </p>
                            </div>
                            <div className="bio-row">
                              <div className="bio-card bio-goals">
                                <h3> <FaBullseye className="bio-icon"/> Short-term Goals</h3>
                                <ul>
                                    <li>Complete my degree with a focus on software engineering.</li>
                                    <li>Contribute to open-source projects.</li>
                                    <li>Build a portfolio of web applications.</li>
                                </ul>
                              </div>
                              <div className="bio-card bio-long-term-goals">
                                    <h3> <FaRocket className="bio-icon"/> Long-term Goals</h3>
                                    <ul>
                                        <li>Become a full-stack developer.</li>
                                        <li>Work on innovative AI projects.</li>
                                        <li>Mentor aspiring developers.</li>
                                    </ul>
                              </div>
                            </div>
                        </div>
                    )}
                    {activeTab === "education" && (
                        <div className="tab-education">
                            <p>
                                Currently pursuing a degree in Computer Science at XYZ University, where I have honed my skills in programming and software development.
                            </p>
                        </div>
                    )}
                    {activeTab === "interests" && (
                        <div className="tab-interests">
                            <p>
                                I have a keen interest in web development, artificial intelligence, and open-source contributions.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default AboutComponent