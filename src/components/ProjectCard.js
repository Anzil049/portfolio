import "./ProjectCard.css";

function ProjectCard({ title, tech, status }) {
    return (
        <div className="project-card">
            <h4>{title}</h4>
            <p><strong>Tech:</strong> {tech}</p>
            <p><strong>Status:</strong> {status}</p>
        </div>
    );
}

export default ProjectCard;
