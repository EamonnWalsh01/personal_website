// src/App.tsx
import React from 'react';
import Gallery from './components/Gallery';
import WebGLBackground from './components/WebGLBackground';  // Add this import

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <WebGLBackground />
      <div className="relative z-10 min-h-screen flex flex-col items-center">
        <header className="bg-white bg-opacity-80 shadow-md p-6 rounded-lg mt-8 w-full max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Welcome!
          </h1>
        </header>
        <main className="mt-8 p-6 bg-white bg-opacity-80 shadow-md rounded-lg w-full max-w-4xl">
          <p className="text-gray-600 mb-6">
            Some projects I've done can be seen below
          </p>
          <Gallery />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Hover me!
          </button>
        </main>
      </div>
    </div>
  );
};

export default App;
