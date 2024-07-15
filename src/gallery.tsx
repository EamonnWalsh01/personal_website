// src/components/Gallery.tsx
import React from 'react';
import Card from './Card';  // Make sure this path is correct

const cardsData = [
  {
    title: 'Card 1',
    description: 'This is the first card.',
    imageUrl: 'https://via.placeholder.com/400'
  },
  {
    title: 'Card 2',
    description: 'This is the second card.',
    imageUrl: 'https://via.placeholder.com/400'
  },
  // Add more cards as needed
];

const Gallery: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} imageUrl={card.imageUrl} />
      ))}
    </div>
  );
};

export default Gallery;
