const skills = [
  "Python", "PyTorch", "Docker", "TensorFlow", "n8n", "Kubernetes",
  "Airflow", "MLflow", "FastAPI", "PostgreSQL", "MongoDB", "AWS",
  "GCP", "Azure", "Git", "Jira", "Confluence", "Slack", "VS Code", "Jupyter"
];

const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-primary tracking-light text-[32px] font-bold leading-tight">Skills &amp; Tools</p>
          <p className="text-secondary text-sm font-normal leading-normal">
            Proficient in a wide range of technologies, frameworks, and tools essential for data science, machine learning operations (MLOps), and AI system development.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {skills.map((skill) => (
          <div key={skill} className="flex flex-1 gap-3 rounded-lg border border-[#324467] bg-[#192233] p-4 items-center">
            <h2 className="text-primary text-base font-bold leading-tight">{skill}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;