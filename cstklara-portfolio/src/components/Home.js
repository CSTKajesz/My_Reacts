import { Link } from 'react-router-dom'
import "../css/components-css/home.css"

export default function Home() {
    return (
        <div className='center-container'>
            <section className="home-section">
                <h1 style={{ fontSize: '2.3em', fontWeight: '500' }}>Welco<strong className="coral">me</strong></h1>
                <p>Welcome to my website, It's good to have you here! I am delighted to have the opportunity to introduce myself  – my name is Csillagné T Klára, and I work as a typographer and designer.
                    <br />Recently, I completed a frontend development training at Progmatic Academy. Throughout the training, I solidified my interest in working with online graphics, whether as a frontend developer or as a UX designer.
                    <br />I'm eager to grow in the web design field, which is why I am already learning some design tool like the Figma system or Adobe Experience Design (XD).</p>
                <p>This website is meant to showcase my skills as a frontend developer and designer through my school assignments and personal projects.</p>
                <p>I am looking for opportunities to get started on this exciting career journey.</p>
                <p>Please pay a visit to my website, and I wish you a pleasant time!</p>
            </section>

        </div>
    )
}