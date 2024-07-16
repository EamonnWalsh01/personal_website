import React from 'react';
import { useInView } from 'react-intersection-observer';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, technologies }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div 
      ref={ref} 
      className={`max-w-sm rounded overflow-hidden shadow-lg bg-white transition-opacity duration-1000 relative ${
        inView ? 'opacity-100' : 'opacity-0'
      } hover:shadow-2xl hover:ring-4 hover:ring-blue-300 hover:ring-opacity-50 transform hover:scale-105`}
      style={{ transition: 'transform 0.3s ease' }}
    >
      <div className="relative w-full" style={{ paddingBottom: '66.67%' }}>
        <img 
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={imageUrl} 
          alt={title} 
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-primary">{title}</div>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <div className="flex flex-wrap">
          {technologies.map((tech, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="glow-effect absolute top-0 left-0 w-full h-full rounded-lg pointer-events-none opacity-0"></div>
    </div>
  );
};

export default Card;
