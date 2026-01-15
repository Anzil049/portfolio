function SkillCard({ skill, level }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <h4>{skill}</h4>
      <p>{level}</p>
    </div>
  );
}

export default SkillCard;
