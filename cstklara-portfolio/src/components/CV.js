import { HiMail, HiLocationMarker } from "react-icons/hi"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import "../css/components-css/cv.css"
import Button from "./DownloadButton"
// import "../assets/profile-pic.jpg"

export default function CV() {
    useEffect(
        () => { window.scrollTo(0, 0) },
        []
    )
    return (
        <div className="cv pure-white-bg">
            <div className="cv-head">
                <div className="cv-head-left">
                    <section className="cv-title">
                        <h2 className="myName">Csillagné Tóth <strong className="coral">Klára </strong></h2>
                        <p>frontend developer</p>
                    </section>
                    <section className="cv-contacts">
                        <p><HiMail style={{ color: "red" }} /> tothkajesz@gmail.com</p>
                        <p><HiLocationMarker style={{ color: "red" }} /> Pest County, Hungary</p>
                        <p><FaLinkedin style={{ color: "red" }} /> <Link to="https://linkedin.com/in/cstk/" target="_blank">klara-csillagne-toth</Link></p>
                        <p><FaGithub style={{ color: "red" }} /><Link to="https://github.com/CSTKajesz" target="_blank">CSTKlara</Link></p>
                    </section>
                </div>
                <div className="cv-head-right">
                    <div className="cv-img-container">
                        <img className="profile-pic" src="/profile-pic.jpg" alt="cstk" />
                    </div>
                </div>
            </div>
            <div className="cv-main-left">
                <section className="cv-about">
                    <h3>Profile</h3>
                    <p>I am an aspiring Frontend Developer with an interest in UX and UI design and a background in print media and design.
                        I am looking for a Junior Frontend or Web Developer position where I can get started on my developer career journey and expand my knowledge of this exciting field.
                        I would also be interested in working in the UX/UI field, in order to further develop myself and utilize my years of design experience.</p>
                </section>
                <section className="cv-work-xp">
                    <h3>Work experience</h3>
                    <div className="cv-work-card">
                        <h4>Frontend developer, online coffee webshop project</h4>
                        <small className="cv-date">April 2023 - May 2023 | Progmatic Academy</small>
                        <ul>
                            <li> our team worked in Agile/Scrum methodology</li>
                            <li>
                                I took responsibility for designing and implementing the website’s layout using React and CSS3,
                                ensuring a responsive design that provides a user-friendly experience </li>
                            <li>
                                the skeletal structure of the website built in React
                            </li>
                            <li>
                                designing and implementing a coffee maker element
                            </li>
                            <li>
                                developing admin authentication
                            </li>
                            <li>
                                to upload images from storage
                            </li>
                            <li>
                                coding the validation and toasts
                            </li>
                            <li>
                                programming product add to cart
                            </li>
                        </ul>                        <div className="work-xp-skills">
                            <span>React</span>
                            <span>CSS3</span>
                            <span>HTML5</span>
                            <span>Scrum</span>
                            <span>Git</span>
                            <span>GitHub</span>
                        </div>
                    </div>
                    <div className="cv-work-card">
                        <h4>Graphic Designer, Typographer</h4>
                        <small className="cv-date">June 2012 - nowadays | Casparus Kiadó </small>
                        <p>I perform the external and internal technical editing of publications and manage their printing process.</p>
                        <div className="work-xp-skills">
                            <span>Design thinking</span>
                            <span>Training</span>
                            <span>Communication</span>
                        </div>
                    </div>
                    <div className="cv-work-card">
                        <h4>Graphic Designer, Typographer</h4>
                        <small className="cv-date"> 2008 - 2012 | Stb Könyvkiadó</small>
                        <p>I designed and technically edited book covers and layouts, including coordinating the printing process and maintaining communication with printers for proofing, quotes, and finalization. From manuscript to publication, I also managed the coordination of publications with editors, proofreaders.
                        </p>
                        <div className="work-xp-skills">
                            <span>InDesign</span>
                            <span>Photoshop</span>
                            <span>Illustrator</span>
                            <span>Adobe Distiller</span>
                            <span>Adobe Reader</span>
                        </div>
                    </div>
                    <div className="cv-work-card">
                        <h4>Graphic Designer, Typographer</h4>
                        <small className="cv-date"> Other book publishers I have worked with</small>
                        <p>Cartaphilus könyvkiadó, Kiskapu könyvkiadó, Csengőkert kiadó,
                            Art Empire Publishing.
                        </p>
                        <div className="work-xp-skills">
                            <span>InDesign</span>
                            <span>Photoshop</span>
                            <span>Illustrator</span>
                            <span>Adobe Distiller</span>
                            <span>Adobe Reader</span>
                        </div>
                    </div>
                </section>
            </div>
            <div className="cv-main-right dark-bg">
                <section className="cv-skills">
                    <h3>Skills & Education</h3>
                    <div className="cv-skill-card skills">
                        <h4>Technical Skills</h4>
                        <ul className="myList">
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                            <li>NodeJs</li>
                            <li>React</li>
                            <li>Git / GitHub</li>
                            <li>Tailwind</li>
                            <li>InDesign</li>
                            <li>Illustrator</li>
                        </ul>
                        <h4 style={{ marginTop: '1rem' }}>Other Skills</h4>
                        <ul className="myList">
                            <li>Problem solving</li>
                            <li>Design skills</li>
                            <li>Responsibility</li>
                            <li>Team worker</li>
                            <li>Independent study</li>
                            <li>Helpful</li>
                            <li>Preciseness</li>
                        </ul>
                    </div>
                    <div className="cv-skill-card education">
                        <h4>Education</h4>
                        <ul className="cv-list">
                            <li>
                                <p>Frontend Developer</p>
                                <small className="cv-date">Progmatic Academy | May 2023</small>
                            </li>
                            <li>
                                <p>Graphic Designer and Typographer</p>
                                <small className="cv-date">Garabonciás (Kreativ szakmák Technikuma) | Sept 2003 - Jun 2005</small>
                            </li>
                        </ul>
                    </div>
                    <div className="cv-skill-card hobbies">
                        <h4>Hobbies & Interests</h4>
                        <p></p>
                        <p>Travel and Cultural Exploration</p>
                        <p>Discower </p>
                        <p>Technology and Digital Culture</p>
                        <p>Reading and watching movies</p>
                        <p>UX and UI design</p>
                    </div>
                    <Button />
                </section>
            </div >
        </div >
    )
} 
