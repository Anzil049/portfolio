function ProjectCard({ title, tech, status }) {
  return (
    <div style={{ border: "1px solid #aaa", padding: "10px" }}>
      <h4>{title}</h4>
      <p>Tech: {tech}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default ProjectCard;
