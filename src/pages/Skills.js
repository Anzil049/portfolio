import SkillCard from "../components/SkillCard";

function Skills() {
  const skills = [
    { skill: "HTML", level: "Advanced" },
    { skill: "CSS", level: "Intermediate" },
    { skill: "JavaScript", level: "Intermediate" },
    { skill: "React", level: "Beginner" },
    { skill: "Node.js", level: "Beginner" },
  ];

  return (
    <>
      <h2>Skills</h2>
      {skills.map((s, i) => (
        <SkillCard key={i} skill={s.skill} level={s.level} />
      ))}
    </>
  );
}

export default Skills;
