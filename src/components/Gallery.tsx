// src/components/Gallery.tsx
import React from 'react';
import Card from './Card';  // Make sure this path is correct

const cardsData = [
  {
    title: 'Anseo web app',
    description: 'Lead the data portion of a webapp.This webapp had the purpose of helping a proespective business owner set up a new business',
    imageUrl: 'https://via.placeholder.com/400'
  },
  {
    title: 'Java mobility game(Pokemon inspired)',
    description: 'This game had the purposes of helping young children learn about the benefits of public transport.',
    imageUrl:'https://assets1.ignimgs.com/2018/03/22/vc-3ds-vc-pokemongold-03-1521755810791.jpg?width=560&crop=16%3A9"'
  },  {
    title: 'Anseo web app',
    description: 'Lead the data portion of a webapp.This webapp had the purpose of helping a proespective business owner set up a new business',
    imageUrl: 'https://via.placeholder.com/400'
  },  {
    title: 'Anseo web app',
    description: 'Lead the data portion of a webapp.This webapp had the purpose of helping a proespective business owner set up a new business',
    imageUrl: 'https://via.placeholder.com/400'
  },
  // Add more cards as needed
];

const Gallery: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 bg-gradient-to-br from-secondary to-primary h-screen bg-opacity-10 p-6 rounded-lg">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} imageUrl={card.imageUrl} />
      ))}
    </div>
  );
};

export default Gallery;

