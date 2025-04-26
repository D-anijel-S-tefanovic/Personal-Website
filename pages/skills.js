import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 90 },
  { name: 'Python', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'CSS', level: 75 },
  { name: 'HTML', level: 70 },
];

const SkillBar = ({ name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span>{name}</span>
      <span>{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <motion.div
        className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-400"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1 }}
      />
    </div>
  </div>
);

const Skills = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Skills</h1>
    {skills.map((skill) => (
      <SkillBar key={skill.name} name={skill.name} level={skill.level} />
    ))}
  </div>
);

export default Skills;
