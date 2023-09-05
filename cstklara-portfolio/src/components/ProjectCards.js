
function ProjectCards(props) {
    return (
        <div className="project-card-view">
            <img variant="top"
                src={props.imgPath}
                alt="card-img"
                style={{ maxWidth: "100%", maxHeight: "auto", objectFit: "cover" }}
            />
            <div className="buttons_container">
                <div className="link_buttons">
                    <a href={props.ghLink} target="_blank">GitHub</a>
                </div>
                <div className="link_buttons">
                    <a href={props.demoLink} target="_blank">Demo</a>
                </div>
            </div>
            <div className="card-title">{props.title}</div>
            <div className="card-text" style={{ textAlign: "left" }}>
                {props.description}
            </div>
        </div >
    );
}
export default ProjectCards;