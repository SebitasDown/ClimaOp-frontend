import { useState } from 'react';
import CityList from './components/CityList';
import CityForm from './components/CityForm';
import './App.css';

function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleCityAdded = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>ClimaOP</h1>
        <p>Monitor de Clima en Tiempo Real</p>
      </header>
      <main className="app-content">
        <CityForm onCityAdded={handleCityAdded} />
        <CityList refreshTrigger={refreshTrigger} />
      </main>
    </div>
  );
}

export default App;
