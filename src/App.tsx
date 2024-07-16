// src/App.tsx
import React from 'react';
import Gallery from './components/Gallery';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-white">
      <div className="min-h-screen flex flex-col items-center p-8">
        <header className="bg-white shadow-md p-6 rounded-lg mt-8 w-full max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Eamonn Walsh
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Mathematics Graduate | Machine Learning Enthusiast | Software Developer
          </p>
        </header>
        <main className="mt-8 p-6 bg-white shadow-md rounded-lg w-full max-w-4xl">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-gray-600">
              I'm a highly motivated Mathematics graduate with a strong foundation in machine learning, data analysis, and software development. I'm passionate about advancing in the fields of artificial intelligence and machine learning, and I'm eager to contribute to cutting-edge tech projects.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Programming Languages: JavaScript, Python, C++, Java, Rust</li>
              <li>Web Technologies: HTML, CSS, React, Node.js</li>
              <li>Databases: MySQL, PostgreSQL</li>
              <li>Tools & Methodologies: Git, Docker, Agile, Test-Driven Development</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Projects</h2>
            <Gallery />
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
