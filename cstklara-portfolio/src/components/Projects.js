import '../css/pages-css/project.css'
import ProjectCards from './ProjectCards';
import onCoffee from "../assets/onlineCoffee/onCoffee.jpg";
import tailwind from "../assets/tailwind/tailwind.jpg";
import travels from "../assets/travels/travels.jpg";
import descOnlineCoffee from '../assets/onlineCoffee/DescOnlineCoffee';
import descTravels from '../assets/travels/DescTravels';
import descTailwind from '../assets/tailwind/DescTailwind';
import descBootstrap from '../assets/bootstrap/DescBootstrap';
import bootstrap from '../assets/bootstrap/bootstrap.jpg';


function Projects() {

    return (
        <>
            <div className="project-container">
                <div className='head-container'>
                    <h1 className="project-heading">
                        My Recent <strong className="coral">Works </strong>
                    </h1>
                    <p style={{ color: "white" }}>
                        Here are a few projects I've worked on recently.
                    </p>
                </div>

                <div className='row'>
                    {/* <div className='project-card'> */}
                    < ProjectCards
                        imgPath={onCoffee}
                        description={descOnlineCoffee}
                        ghLink="https://github.com/pmfs22h2/csapat-05-funny-pistons"
                        demoLink="https://64e9c1fdedd7a71cb3f59772--willowy-syrniki-619137.netlify.app"
                    />
                    < ProjectCards
                        imgPath={tailwind}
                        description={descTailwind}
                        ghLink="https://github.com/CSTKajesz/My_Reacts/tree/main/TailwindCSS/first"
                        demoLink="https://fabulous-sopapillas-7c38c5.netlify.app"
                    />
                    < ProjectCards
                        imgPath={travels}
                        description={descTravels}
                        ghLink="https://github.com/CSTKajesz/My_Reacts/tree/main/Travels_Project"
                        demoLink="https://adorable-salamander-e89fc9.netlify.app"
                    />
                    < ProjectCards
                        imgPath={bootstrap}
                        description={descBootstrap}
                        ghLink="https://github.com/CSTKajesz/My_Reacts/tree/main/First_Bootstrap"
                        demoLink="https://frabjous-lamington-ac8197.netlify.app"
                    />

                    {/* </div> */}
                </div>
            </div>
        </>
    );
}
export default Projects