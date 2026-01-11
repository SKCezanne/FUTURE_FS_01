import { useState } from "react";

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState("");

  const skillInfo = {
    Linux: "Used for servers, penetration testing tools, and scripting.",
    Networking: "Understanding TCP/IP, ports, DNS, firewalls, and routing.",
    Python: "Used for automation, scripting, and security tools.",
    "Cybersecurity Basics":
      "Knowledge of threats, vulnerabilities, encryption, and secure systems.",
  };

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills">
        {Object.keys(skillInfo).map((skill) => (
          <button
  key={skill}
  className={`skill-btn ${
    selectedSkill === skill ? "active-skill" : ""
  }`}
  onClick={() => setSelectedSkill(skill)}
>

            {skill}
          </button>
        ))}
      </div>
        
      {selectedSkill && (
        <div className="skill-info">
          <h3>{selectedSkill}</h3>
          <p>{skillInfo[selectedSkill]}</p>
        </div>
      )}
    </section>
  );
}

export default Skills;
