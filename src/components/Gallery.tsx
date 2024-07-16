import React from 'react';
import Card from './Card';

const cardsData = [
  {
    title: 'Gesture Control Camera App',
    description: 'Developed a camera application in Rust using gesture recognition technologies and integrated computer vision libraries for accurate gesture detection.',
    imageUrl: 'https://via.placeholder.com/400?text=Gesture+Control+Camera',
    technologies: ['Rust', 'Computer Vision']
  },
  {
    title: 'Public Transport Carbon Game',
    description: 'Developed an educational game in Java/JavaFX to teach players about the carbon footprint of different modes of public transport. Implemented player movement, public transport options, and animations.',
    imageUrl: 'https://assets1.ignimgs.com/2018/03/22/vc-3ds-vc-pokemongold-03-1521755810791.jpg?width=560&crop=16%3A9',
    technologies: ['Java', 'JavaFX']
  },
  {
    title: 'Anseo Web App',
    description: 'Led data analysis and modelling for a web application suggesting optimal NYC zip codes for new businesses. Created a predictive model with 85% accuracy and integrated large language models (LLMs).',
    imageUrl: 'https://via.placeholder.com/400?text=Anseo+Web+App',
    technologies: ['Data Analysis', 'Machine Learning', 'LLMs']
  },
];

const Gallery: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 bg-gradient-to-br from-secondary to-primary p-8 rounded-lg">
      {cardsData.map((card, index) => (
        <Card 
          key={index} 
          title={card.title} 
          description={card.description} 
          imageUrl={card.imageUrl}
          technologies={card.technologies}
        />
      ))}
    </div>
  );
};

export default Gallery;
