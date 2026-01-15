import ProjectCard from "../components/ProjectCard";

function Projects() {
    return (
        <>
            <h2>Projects</h2>
            <ProjectCard
                title="Tokyo E-Commerce Platform"
                tech="MERN Stack"
                status="In Progress"
            />
            <ProjectCard
                title="Portfolio Website"
                tech="React"
                status="Completed"
            />
        </>
    );
}

export default Projects;
