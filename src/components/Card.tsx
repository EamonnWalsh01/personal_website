// src/components/Card.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, technologies }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 15
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out"
    >
      <motion.div 
        className="relative w-full" 
        style={{ paddingBottom: '66.67%' }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <img 
          className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
          src={imageUrl} 
          alt={title} 
        />
      </motion.div>
      <div className="px-6 py-4">
        <motion.div variants={childVariants} className="font-bold text-xl mb-2 text-gray-800">{title}</motion.div>
        <motion.p variants={childVariants} className="text-gray-600 text-base mb-4">{description}</motion.p>
        <motion.div variants={childVariants} className="flex flex-wrap">
          {technologies.map((tech, index) => (
            <motion.span 
              key={index}
              variants={childVariants}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              whileHover={{ scale: 1.1, backgroundColor: '#e2e8f0' }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card;
