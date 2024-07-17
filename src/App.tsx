import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Gallery from './components/Gallery';
import SkillBar from './components/SkillBar';
import AnimatedText from './components/AnimatedText';
import HeadShot from './assets/NIce.jpg';

const Home: React.FC = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'C++', level: 75 },
    { name: 'Java', level: 80 },
    { name: 'Rust', level: 70 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/30">
      <div className="min-h-screen flex flex-col items-center p-8">
        <motion.header 
          className="bg-white shadow-lg p-8 rounded-lg mt-8 w-full max-w-4xl border-l-4 border-primary"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 text-center">
            Eamonn Walsh
          </h1>
          <p className="text-center text-gray-600 mt-4 text-lg">
            Mathematics Graduate | Machine Learning Enthusiast | Software Developer
          </p>
        </motion.header>

        <motion.img
          src={HeadShot}
          alt="Eamonn Walsh"
          className="w-40 h-40 object-cover border-4 border-primary shadow-lg mt-8"
          initial={{ borderRadius: '50%' }}
          whileHover={{ borderRadius: '20%' }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
        
        <motion.main 
          className="mt-12 p-8 bg-white shadow-lg rounded-lg w-full max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.section className="mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-primary mb-6">About Me</h2>
            <AnimatedText 
              text="I'm a highly motivated Mathematics graduate with a strong foundation in machine learning, data analysis, and software development. My passion lies in advancing the fields of artificial intelligence and machine learning, and I'm eager to contribute to cutting-edge tech projects that push the boundaries of what's possible."
              className="text-gray-600 text-lg leading-relaxed"
            />
          </motion.section>

          <motion.section className="mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-primary mb-6">Skills</h2>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Web Technologies', 'Databases', 'Tools & Methodologies'].map((category, index) => (
                <motion.div 
                  key={index}
                  className="bg-secondary/20 p-4 rounded-lg border-l-2 border-primary"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(109, 232, 142, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h3 className="font-semibold text-gray-700 mb-2">{category}</h3>
                  <ul className="text-gray-600 text-sm">
                    {category === 'Web Technologies' && ['HTML', 'CSS', 'React', 'Node.js'].map((tech, i) => <li key={i}>{tech}</li>)}
                    {category === 'Databases' && ['MySQL', 'PostgreSQL'].map((tech, i) => <li key={i}>{tech}</li>)}
                    {category === 'Tools & Methodologies' && ['Git', 'Docker', 'Agile', 'TDD'].map((tech, i) => <li key={i}>{tech}</li>)}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-bold text-primary mb-6">Projects</h2>
            <Gallery />
          </motion.section>
        </motion.main>
      </div>
    </div>
  );
};
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lander" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;

