// src/components/SkillBar.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
}
const SkillBar: React.FC<SkillBarProps> = ({ name, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700">{name}</span>
        <span className="text-sm font-medium text-gray-600">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div 
          className="bg-primary h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
