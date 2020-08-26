import React from 'react';
import Paper from '@material-ui/core/Paper';

import './Skills.scss';

const Skills: React.FC = () => {
  interface Skill {
    name: string;
  }

  const skills: Skill[] = [
    { name: 'Skill' },
    { name: 'Skill' },
    { name: 'Skill' },
    { name: 'Skill' },
    { name: 'Skill' },
    { name: 'Skill' },
    { name: 'Skill' },
    { name: 'Skill' },
    { name: 'Skill' },
    { name: 'Skill' },
    { name: 'Skill' },
    { name: 'Skill' },
    { name: 'Skill' },
    { name: 'Skill' },
    { name: 'Skill' },
    { name: 'Skill' },
    { name: 'Skill' },
    { name: 'Skill' },
    { name: 'Skill' },
    { name: 'Skill' },
  ];

  return (
    <Paper className="skills" elevation={3}>
      {skills.map((skill: Skill) => (
        <div className="skill">{skill.name}</div>
      ))}
    </Paper>
  );
};

export default Skills;
