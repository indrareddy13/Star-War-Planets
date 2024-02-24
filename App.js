import React, { useState, useEffect } from 'react';
import 'https://github.com/indrareddy13/Star-Wars-Planets/blob/main/index.css';

function PlanetCard({ planet }) {
  return (
    <div className="card">
      <h2>{planet.name}</h2>
      <p><strong>Climate:</strong> {planet.climate}</p>
      <p><strong>Terrain:</strong> {planet.terrain}</p>
      <p><strong>Population:</strong> {planet.population}</p>
      <a href="#" className="button">View Details</a> {/* Dummy link */}
    </div>
  );
}

function App() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetchPlanets();
  }, []);

  const fetchPlanets = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/planets/?format=json');
      const data = await response.json();
      setPlanets(data.results.slice(0, 10)); 
    } catch (error) {
      console.error('Error fetching planets:', error);
    }
  };

  return (
    <div className="App">
      <div className="background-image"></div>
      <h1>Star Wars Planets</h1>
      <div className="planets-directory">
        <h2>Planets Directory</h2>
        <div className="planet-cards">
          {planets.map((planet, index) => (
            <PlanetCard key={index} planet={planet} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
